# Romaji.js in JavaScript

[行政基本情報データ連携モデル 住所](https://github.com/code4fukui/BaseRegistry/blob/main/%E8%A1%8C%E6%94%BF%E5%9F%BA%E6%9C%AC%E6%83%85%E5%A0%B1%E3%83%87%E3%83%BC%E3%82%BF%E9%80%A3%E6%90%BA%E3%83%A2%E3%83%87%E3%83%AB-%E4%BD%8F%E6%89%80.md)にほぼ準拠するローマ字生成するJavaScriptプログラム(ESモジュール)

- 漢字による判定が未実装

## sample

https://code4fukui.github.io/kana2roma/

## usage

ブラウザのESモジュール(script type内)または、Denoで動く

```js
import { Romaji } from "https://code4fukui.github.io/kana2roma/Romaji.js";

console.log(Romaji.encode("とうきょう")); // tokyo
```

## logic

[行政基本情報データ連携モデル 住所](https://github.com/code4fukui/BaseRegistry/blob/main/%E8%A1%8C%E6%94%BF%E5%9F%BA%E6%9C%AC%E6%83%85%E5%A0%B1%E3%83%87%E3%83%BC%E3%82%BF%E9%80%A3%E6%90%BA%E3%83%A2%E3%83%87%E3%83%AB-%E4%BD%8F%E6%89%80.md)より

- [ヘボン式ローマ字](https://github.com/code4fukui/BaseRegistry/blob/main/%E3%83%98%E3%83%9C%E3%83%B3%E5%BC%8F%E3%83%AD%E3%83%BC%E3%83%9E%E5%AD%97.csv)を用いる
- はねる音「ん」は、「n」と書く
- はねる音をあらわす「n」と、次に来る母音字又は「y」を切り離す必要がある場合には、「n」の次にハイフンを入れる
- つまる音は、次の音節の最初の子音字を重ねて表す。ただし、次に「ch」音がくる場合には「c」を重ねず「t」を用いる
- 長音を表す記号は、省略することを原則とする。 ただし、50 音の「い」段の長音は、「i」を重ねて表し、「えい」は「ei」と書く
- 表音のローマ字表記が「ou」「oo」「uu」となるときに、対応する元の漢字が一文字の場合にはそれぞれ「o」「o」「u」に短縮するが、二文字に分かれる場合には短縮しない。ただし、短縮する表記が通用している場合には、短縮してもよい

## 参考

- [道路標識のローマ字（ヘボン式） の綴り方 | KICTEC](https://www.kictec.co.jp/varieties-road-sign/hebon-romaji.php/)

