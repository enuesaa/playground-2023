import gradio as gr
from gradio import Blocks

def greet(name, value):
    return ["Hello " + name + ":" + value + "!", "a"]

def create_custom_interface() -> Blocks:
    return gr.Interface(fn=greet, inputs=["text", "text"], outputs=["text", "text"])

def create_huggingface_inference() -> Blocks:
    return gr.load("Helsinki-NLP/opus-mt-en-es", src="models")

def main():
    app = create_custom_interface()
    # app = create_huggingface_inference()
    app.launch()
