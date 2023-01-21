from keras.datasets import imdb

def app():
  # https://qiita.com/hkambe/items/8c56ca8f0bbb4f895dee
  (train_data, train_labels), (test_data, test_labels) = imdb.load_data(num_words=10000)
  print(train_data[0])
