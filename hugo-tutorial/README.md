# hugo-tutorial

## Install hugo command
```bash
brew install hugo
```

## Download Theme
git経由でダウンロードする例が多いが正しいのだろうか。。実務ではthemeもコミットするのかな。
```bash
git clone https://github.com/theNewDynamic/gohugo-theme-ananke theme/ananke
rm -rf theme/ananke/.git
echo "theme/ananke" >> .gitignore
echo "theme = 'ananke'" >> hugo.toml
hugo server
```

## Memo
- Netlify CMS というものがあり Hugo ベースで動的にコンテンツを作成できるらしい
- Goベースの割に jamstack.org に載っていたり integration が多い

## Links
- https://gohugo.io/getting-started/quick-start/
- https://fand.jp/foresty-can-manage-hugo-content-on-the-web/
