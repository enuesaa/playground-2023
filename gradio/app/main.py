import gradio as gr
from gradio import Blocks

def greet(name, num):
    return ["Hello " + name  + "!", str(num)]

def create_custom_interface() -> Blocks:
    return gr.Interface(
        title="title",
        description="description",
        article="aaaa", # under the form
        fn=greet,
        live=True, # auto submit
        inputs=[
            gr.Textbox(
                lines=2,
                placeholder="placeholder..",
            ),
            gr.Slider(0, 100),
        ],
        outputs=[
            gr.Textbox(
                label="aa", # label for textarea
                info="bb", # almost sub-label
                lines=2,
                placeholder="placeholder..",
            ),
            "text",
        ],
    )

def create_huggingface_inference() -> Blocks:
    return gr.load("Helsinki-NLP/opus-mt-en-es", src="models")

def main():
    app = create_custom_interface()
    # app = create_huggingface_inference()
    app.launch()
