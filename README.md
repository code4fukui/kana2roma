# kana2roma

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A JavaScript ES module for converting Japanese kana to Romaji. It implements Hepburn romanization with rules tailored for Japanese administrative addresses.

## Demo
https://code4fukui.github.io/kana2roma/

## Features
- **Hepburn Romanization:** Converts hiragana to Romaji based on the Hepburn system.
- **Long Vowels:** Long vowel marks (`ー`) are omitted, and combinations like `ou` are simplified to `o` (e.g., `とうきょう` → `tokyo`).
- **Geminate Consonants (Sokuon):** Correctly handles the small `っ` by doubling the following consonant (e.g., `ほっかいどう` → `hokkaido`, `ぶっちいん` → `butchiin`).
- **Syllabic 'n' (Hatsuon):** Inserts a hyphen after `ん` when it's followed by a vowel or a 'y' to prevent ambiguity (e.g., `しんいけちょう` → `shin-ikecho`).
- **Address Formatting:** Processes numbers as found in addresses (e.g., `1ちょうめ` → ` 1-chome`).

## Usage
Import the ES module in your browser or Deno project.

```js
import { Romaji } from "https://code4fukui.github.io/kana2roma/Romaji.js";

// Basic conversion
console.log(Romaji.encode("とうきょう")); // tokyo

// Advanced conversion with address-specific rules
console.log(Romaji.encode("ほっかいどう")); // hokkaido
console.log(Romaji.encode("しんよこえ1ちょうめ")); // shin-yokoe 1-chome
```

## API

### `Romaji.encode(kanaString)`
Converts a hiragana string to a Romaji string.

- `kanaString`: The input string in hiragana.
- Returns: The converted Romaji string.

*Note: The library expects hiragana input. For katakana support, pre-convert it to hiragana first. The official demo does this using [moji.js](https://github.com/taisukef/moji).*

## Data Source
The kana-to-romaji mapping is based on the [ヘボン式ローマ字.csv](https://code4fukui.github.io/BaseRegistry/ヘボン式ローマ字.csv) data from the BaseRegistry project.

## License
MIT License — see [LICENSE](LICENSE).