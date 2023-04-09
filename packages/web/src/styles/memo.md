# memo
- emotionベース
- emotionの一つ上のレイヤー. uitlity functionライクな薄いレイヤー.

## グローバルで定義しても違和感が少ないもの (グローバルに書いた方が良い、という訳ではない)
- input周りのreset css

## 他へ影響があるもの ... styled へ
- margin ... <Space height='100%' width='100%'>
- display ... <span> <InlineBlock> <div> <Flex> <FlexBasis basis=''>
- position ... <Relative> <Absolute> <Fixed>

## 親要素`のみ`が定義し子要素では定義すべきでないこと
- height(絶対値)
- width(絶対値)

## 当該要素で定義すべきもの
- 基本 margin: 0, padding: 0, fontSize: normal, width: auto, height: auto

### surf
- color
- background

### size
- font size
- font weight
- padding

### decorate
- border
- border radius
- box shadow

- line height
- width
- height
- vertical align
- cursor

## Layer
- Basic Theme
- Property Combination // builder like // with cache
- styled
