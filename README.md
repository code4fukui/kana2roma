# Romaji.js in JavaScript

[行政基本情報データ連携モデル 住所](https://github.com/code4fukui/BaseRegistry/blob/main/%E8%A6%B3%E5%85%89%E7%AB%8B%E5%9B%BD%E5%AE%9F%E7%8F%BE%E3%81%AB%E5%90%91%E3%81%91%E3%81%9F%E5%A4%9A%E8%A8%80%E8%AA%9E%E5%AF%BE%E5%BF%9C%E3%81%AE%E6%94%B9%E5%96%84%E3%83%BB%E5%BC%B7%E5%8C%96%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%82%AC%E3%82%A4%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3.md)にほぼ準拠するローマ字生成するJavaScriptプログラム(ESモジュール)

- 漢字による判定が未実装

## usage

ブラウザのESモジュール(script type内)または、Denoで動く

```js
import { Romaji } from "https://code4fukui.github.io/kana2roma/Romaji.js";

console.log(Romaji.encode("とうきょう")); // tokyo
```

## logic

[行政基本情報データ連携モデル 住所](https://github.com/code4fukui/BaseRegistry/blob/main/%E8%A6%B3%E5%85%89%E7%AB%8B%E5%9B%BD%E5%AE%9F%E7%8F%BE%E3%81%AB%E5%90%91%E3%81%91%E3%81%9F%E5%A4%9A%E8%A8%80%E8%AA%9E%E5%AF%BE%E5%BF%9C%E3%81%AE%E6%94%B9%E5%96%84%E3%83%BB%E5%BC%B7%E5%8C%96%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E3%82%AC%E3%82%A4%E3%83%89%E3%83%A9%E3%82%A4%E3%83%B3.md)より

- [ヘボン式ローマ字](https://github.com/code4fukui/BaseRegistry/blob/main/%E3%83%98%E3%83%9C%E3%83%B3%E5%BC%8F%E3%83%AD%E3%83%BC%E3%83%9E%E5%AD%97.csv)を用いる
- はねる音「ん」は、「n」と書く
- はねる音をあらわす「n」と、次に来る母音字又は「y」を切り離す必要がある場合には、「n」の次にハイフンを入れる
- つまる音は、次の音節の最初の子音字を重ねて表す。ただし、次に「ch」音がくる場合には「c」を重ねず「t」を用いる
- 長音を表す記号は、省略することを原則とする。 ただし、50 音の「い」段の長音は、「i」を重ねて表し、「えい」は「ei」と書く
- 表音のローマ字表記が「ou」「oo」「uu」となるときに、対応する元の漢字が一文字の場合にはそれぞれ「o」「o」「u」に短縮するが、二文字に分かれる場合には短縮しない。ただし、短縮する表記が通用している場合には、短縮してもよい

## 参考

- [道路標識のローマ字（ヘボン式） の綴り方 | KICTEC](https://www.kictec.co.jp/varieties-road-sign/hebon-romaji.php/)

