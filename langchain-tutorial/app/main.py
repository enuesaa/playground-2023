from langchain.schema import (
    AIMessage,
    HumanMessage,
    SystemMessage
)
from langchain.chat_models import ChatOpenAI

def main():
    chat = ChatOpenAI()
    chat([HumanMessage(content="Translate this sentence from English to French: I love programming.")])
