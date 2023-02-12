# from keras.datasets import imdb
# from app.doc2vec import main


# def app():
#     # https://qiita.com/hkambe/items/8c56ca8f0bbb4f895dee
#     # (train_data, train_labels), (test_data, test_labels) = imdb.load_data(num_words=10000)
#     # print(train_data[0])
#     main()

import random
import glob
from tqdm import tqdm

import torch
from torch.utils.data import DataLoader
from transformers import BertJapaneseTokenizer, BertForSequenceClassification
import pytorch_lightning as pl

def app():
    # https://github.com/stockmarkteam/bert-book/blob/master/Chapter6.ipynb
    tokenizer = BertJapaneseTokenizer.from_pretrained('cl-tohoku/bert-base-japanese-whole-word-masking')
    bert_sc = BertForSequenceClassification.from_pretrained(
        'cl-tohoku/bert-base-japanese-whole-word-masking',
        num_labels=2
    )
    bert_sc = bert_sc.cuda()

    encoding = tokenizer(
        ["この音楽は素晴らしかった", "この音楽は聞き飽きた", "この音楽をいつも聞いている"], 
        padding = 'longest',
        return_tensors='pt'
    )
    encoding = { k: v.cuda() for k, v in encoding.items() }
    labels = torch.tensor([1,0,1]).cuda()

    with torch.no_grad():
        output = bert_sc.forward(**encoding)
    scores = output.logits
    labels_predicted = scores.argmax(-1)
    num_correct = (labels_predicted==labels).sum().item()
    accuracy = num_correct/labels.size(0)

    print("scores", scores.size())
    print("predicted", labels_predicted)
    print("accuracy", accuracy)
