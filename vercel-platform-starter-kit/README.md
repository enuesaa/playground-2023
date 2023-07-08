# vercel platforms-starter-kit

## Links
- https://zenn.dev/makery/articles/ceee393448fe10
- https://zenn.dev/re24_1986/articles/b76c3fd8f76aec

## Memo
基本は[こちら](https://zenn.dev/makery/articles/ceee393448fe10) の通りすれば起動した。  
ただし環境変数が変更されていたので注意

### 変更点
- SECRET ではなく NEXTAUTH_SECRET
- mysql でも起動できそうだが、環境変数を見る限り POSTGRES と prefix がついたものしかない
- POSTGRES_URL_NON_POOLING という環境変数の定義も必要。何に使うのか分からないが、POSTGRES_PRISMA_URL と同じ値を入れると起動できた

## 感想
- starter kit なので、思いの外機能は少ない。
- (ローカルで)サブドメインを作成するappは初めてみた。
- デザインはvercelに近い
- app router だ。
