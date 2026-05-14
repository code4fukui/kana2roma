# kana2roma


日本語のかなをローマ字に変換するためのJavaScript ESモジュールです。日本の行政区画の住所に合わせたルールでヘボン式ローマ字を実装しています。

## デモ
https://code4fukui.github.io/kana2roma/

## 特徴
- **ヘボン式ローマ字:** ヘボン式に基づいてひらがなをローマ字に変換します。
- **長音:** 長音記号（`ー`）は省略され、`ou` のような組み合わせは `o` に簡略化されます（例：`とうきょう` → `tokyo`）。
- **促音:** 小さい `っ` を正しく処理し、続く子音を重ねます（例：`ほっかいどう` → `hokkaido`、`ぶっちいん` → `butchiin`）。
- **撥音:** 曖昧さを防ぐため、`ん` の後に母音または 'y' が続く場合はハイフンを挿入します（例：`しんいけちょう` → `shin-ikecho`）。
- **住所のフォーマット:** 住所に含まれる数字を処理します（例：`1ちょうめ` → ` 1-chome`）。

## 使い方
ブラウザまたはDenoプロジェクトでESモジュールをインポートします。

```js
import { Romaji } from "https://code4fukui.github.io/kana2roma/Romaji.js";

// 基本的な変換
console.log(Romaji.encode("とうきょう")); // tokyo

// 住所特有のルールを用いた高度な変換
console.log(Romaji.encode("ほっかいどう")); // hokkaido
console.log(Romaji.encode("しんよこえ1ちょうめ")); // shin-yokoe 1-chome
```

## API

### `Romaji.encode(kanaString)`
ひらがなの文字列をローマ字の文字列に変換します。

- `kanaString`: ひらがなの入力文字列。
- 戻り値: 変換されたローマ字の文字列。

*注: このライブラリはひらがなの入力を想定しています。カタカナをサポートするには、事前にひらがなに変換してください。公式デモでは [moji.js](https://github.com/taisukef/moji) を使用してこれを行っています。*

## データソース
かなからローマ字へのマッピングは、BaseRegistryプロジェクトの [ヘボン式ローマ字.csv](https://code4fukui.github.io/BaseRegistry/ヘボン式ローマ字.csv) データに基づいています。

## ライセンス
MIT License — [LICENSE](LICENSE) を参照してください。
