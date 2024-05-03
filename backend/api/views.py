from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, StreamingHttpResponse
import requests
import uuid
import json
import os
from pdf2image import convert_from_path, convert_from_bytes
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage
import threading
import random
import google.generativeai as genai
import google.ai.generativelanguage as glm
import os
from .models import UseCases, DocumentTypes


os.environ["_BARD_API_KEY"] = "WwhMDr8qCuXIPs1pwR-lOgPsB51q86WuevPCH5VpcCcxVEEQqywHYShAfkE19lCRXUOQaQ."
# host_url = "http://16.170.244.54"
host_url = "https://qbh39rzw-8000.euw.devtunnels.ms"
googleAPIKey = "AIzaSyBeo4NGA__U6Xxy-aBE6yFm19pgq8TY-TM"
genai.configure(api_key='AIzaSyALFCivW9GP25mbxL3W7Fv6u7m2ZHVlC8w')


def getAnswer(images):
    url = "https://content-vision.googleapis.com/v1/images:annotate?alt=json&key="+googleAPIKey
    payload = {"requests": []}
    for i in images:
        temp = {
            "image": {"source": {"imageUri": i}},
            "features": [
                {
                    "type": "DOCUMENT_TEXT_DETECTION",
                    "maxResults": 50,
                    "model": "builtin/latest",
                }
            ],
        }
        payload["requests"].append(temp)

    headers = {
        "authority": "content-vision.googleapis.com",
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,gu;q=0.8",
        "content-type": "application/json",
        "origin": "https://content-vision.googleapis.com",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
        "x-origin": "https://explorer.apis.google.com",
        "x-requested-with": "XMLHttpRequest",
    }
    response = requests.request("POST", url, headers=headers, data=json.dumps(payload))
    OCRString = ""
    try:
        for i in range(len(response.json()["responses"])):
            OCRString += "\n\n\n"+response.json()["responses"][i]["fullTextAnnotation"]["text"]
    except Exception as e:
        print(e)
    return OCRString


@csrf_exempt
def dataExtract(request, link):
    if request.method == "POST":
        documentData = DocumentTypes.objects.filter(url=link).first()
        pdf_file = request.FILES["pdf"]
        randomUUID = str(uuid.uuid4())
        fs = FileSystemStorage(location="static/pdf/")
        filename = fs.save(f"{randomUUID}.pdf", pdf_file)
        os.mkdir(f"./static/pages/{randomUUID}")
        image_list = []
        images = convert_from_path(
            f"./static/pdf/{randomUUID}.pdf",
            dpi=150,
            output_folder=f"./static/pages/{randomUUID}",
            fmt="png",
            output_file=f"image",
            thread_count=5,
            poppler_path="./poppler-23.05.0/Library/bin/"
        )
        for filename in os.listdir(f"./static/pages/{randomUUID}"):
            image_list.append(f"/static/pages/{randomUUID}/{filename}")
        image_Array = []
        for i in range(len(image_list)):
            image_Array.append(host_url + image_list[i])

        OCRString = getAnswer(image_Array)
        with open(f"./OCR.txt", "w", encoding="utf-8") as f:
            f.write(OCRString)
        fields = documentData.fields
        properties = {}
        for field in fields:
            properties[field] = {'type_': 'STRING'}
        entityTool = {
            'function_declarations': [
                {
                    'name': 'entityTool',
                    'description': 'List of entities and value extracted from the text.',
                    'parameters': {
                        'type_': 'OBJECT',
                        'properties': properties,
                        'required': []
                    }
                }
            ]
        }
        safety_settings = [
            {
                "category": "HARM_CATEGORY_HARASSMENT",
                "threshold": "BLOCK_NONE"
            },
            {
                "category": "HARM_CATEGORY_HATE_SPEECH",
                "threshold": "BLOCK_NONE"
            },
            {
                "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                "threshold": "BLOCK_NONE"
            },
            {
                "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                "threshold": "BLOCK_NONE"
            },
        ]

        model = genai.GenerativeModel(model_name='gemini-1.5-pro-latest', tools=entityTool, safety_settings=safety_settings)
        chat = model.start_chat()
        response = chat.send_message('PDF Data : \n\n'+OCRString)
        fc = response.candidates[0].content.parts[0].function_call
        data = {}
        if fc.name == "entityTool":
            for field in fields:
                try:
                    data[field] = fc.args[field]
                except:
                    pass

        print(data)
        return HttpResponse(
            json.dumps({"images": image_list, "data": data}), content_type="application/json"
        )
    else:
        return HttpResponse("Error")


@csrf_exempt
def imageToText(request):
    if request.method == "POST":
        jsonData = json.loads(request.body)
        imageArr = jsonData["images"]
        for i in range(len(imageArr)):
            imageArr[i] = host_url + imageArr[i]
        imageArr = [imageArr[i: i + 10] for i in range(0, len(imageArr), 10)]
        answers = []
        text = []
        box = []
        for i in range(len(imageArr)):
            textTemp, boxTemp = getAnswer(imageArr[i])
            text.extend(textTemp)
            box.extend(boxTemp)
        return HttpResponse(
            json.dumps({"text": text, "box": box}), content_type="application/json"
        )
    else:
        return HttpResponse("Error")


def documentAIData(request):
    usecases = UseCases.objects.all()
    documentTypes = DocumentTypes.objects.all()
    usecasesArr = []
    documentTypesArr = []
    for doc in documentTypes:
        temp = {}
        temp["img"] = doc.img
        temp["name"] = doc.name
        temp["url"] = doc.url
        temp["usecases"] = []
        for usecase in doc.usecases.all():
            temp["usecases"].append(usecase.heading)
        documentTypesArr.append(temp)
    for usecase in usecases:
        usecasesArr.append(usecase.heading)
    return HttpResponse(json.dumps({"usecases": usecasesArr, "docTypes": documentTypesArr}), content_type="application/json")


def docPages(request, link):
    documentData = DocumentTypes.objects.filter(url=link).first()
    usecases = documentData.usecases.all()
    data = {
        "title": documentData.title,
        "name": documentData.name,
        "subtitle": documentData.subtitle,
        "img": documentData.img,
        "usecases": [],
        "fields": documentData.fields,
        "url": documentData.url,
    }
    for usecase in usecases:
        data["usecases"].append({"heading": usecase.heading, "paragraph": usecase.paragraph})

    return HttpResponse(json.dumps(data), content_type="application/json")


def edditor(request):
    with open("./api/nanonetProducts2.json", "r") as f:
        data = json.load(f)
    documents = DocumentTypes.objects.all()
    for doc in documents:
        for entry in data:
            if entry["name"] == doc.name:
                doc.url = entry["link"]
                doc.save()
                print(doc.name, "Updated", entry["link"])
                break
    return HttpResponse("Hello World")
