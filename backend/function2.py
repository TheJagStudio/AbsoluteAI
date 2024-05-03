import google.generativeai as genai
import google.ai.generativelanguage as glm
import os

genai.configure(api_key='AIzaSyALFCivW9GP25mbxL3W7Fv6u7m2ZHVlC8w')


def fileWriter(filename, content):
    with open(filename, 'w') as f:
        f.write(content)
    return filename


discription = input('Enter the description of the game: ')
model = genai.GenerativeModel(model_name='gemini-1.0-pro')

chat = model.start_chat()
newPrompt = chat.send_message(discription+' Add a filename too.')

fileWriterFunctionCall = {
    'function_declarations': [
        {
            'name': 'fileWriter',
            'description': 'Writes content to a file.',
            'parameters': {
                'type_': 'OBJECT',
                'properties': {
                    'filename': {'type_': 'STRING'},
                    'content': {'type_': 'STRING'}
                },
                'required': ['filename', 'content']
            }
        }
    ]
}

model = genai.GenerativeModel(model_name='gemini-1.0-pro', tools=fileWriterFunctionCall)


chat = model.start_chat()
response = chat.send_message(discription+' Add a filename too.\n\n' + newPrompt.text)
fc = response.candidates[0].content.parts[0].function_call
assert fc.name == 'fileWriter'
filename = fc.args['filename']
content = fc.args['content']

result = fileWriter(filename, content)
