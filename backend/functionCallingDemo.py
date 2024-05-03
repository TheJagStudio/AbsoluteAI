import google.generativeai as genai
import google.ai.generativelanguage as glm
import os

genai.configure(api_key='AIzaSyALFCivW9GP25mbxL3W7Fv6u7m2ZHVlC8w')


def multiply(a: float, b: float):
    """returns a * b."""
    return a*b


def add(a: float, b: float):
    """returns a + b."""
    return a+b


calculator = {
    'function_declarations': [
        {
            'name': 'multiply',
            'description': 'Returns the product of two numbers.',
            'parameters': {
                'type_': 'OBJECT',
                'properties': {
                    'a': {'type_': 'NUMBER'},
                    'b': {'type_': 'NUMBER'}
                },
                'required': ['a', 'b']
            }
        },
        {
            'name': 'add',
            'description': 'Returns the sum of two numbers.',
            'parameters': {
                'type_': 'OBJECT',
                'properties': {
                    'a': {'type_': 'NUMBER'},
                    'b': {'type_': 'NUMBER'}
                },
                'required': ['a', 'b']
            }
        }
    ]
}


model = genai.GenerativeModel(model_name='gemini-1.0-pro', tools=calculator)

chat = model.start_chat()
response = chat.send_message('I have 57 cats and 44 dogs, how many pets I have?')
fc = response.candidates[0].content.parts[0].function_call
assert fc.name == 'add'

result = add(fc.args['a'], fc.args['b'])

response = chat.send_message(
    glm.Content(
        parts=[
            glm.Part(
                function_response=glm.FunctionResponse(
                    name='add',
                    response={'result': result}
                )
            )
        ]
    )
)
print(response.text)
