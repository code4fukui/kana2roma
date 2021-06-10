// https://code4fukui.github.io/BaseRegistry/ヘボン式ローマ字.csv
const KANA_ROMA = {"あ":"a","い":"i","う":"u","え":"e","お":"o","か":"ka","き":"ki","く":"ku","け":"ke","こ":"ko","さ":"sa","し":"shi","す":"su","せ":"se","そ":"so","た":"ta","ち":"chi","つ":"tsu","て":"te","と":"to","な":"na","に":"ni","ぬ":"nu","ね":"ne","の":"no","は":"ha","ひ":"hi","ふ":"fu","へ":"he","ほ":"ho","ま":"ma","み":"mi","む":"mu","め":"me","も":"mo","や":"ya","ゆ":"yu","よ":"yo","ら":"ra","り":"ri","る":"ru","れ":"re","ろ":"ro","わ":"wa","ん":"n","が":"ga","ぎ":"gi","ぐ":"gu","げ":"ge","ご":"go","ざ":"za","じ":"ji","ず":"zu","ぜ":"ze","ぞ":"zo","だ":"da","ぢ":"ji","づ":"zu","で":"de","ど":"do","ば":"ba","び":"bi","ぶ":"bu","べ":"be","ぼ":"bo","ぱ":"pa","ぴ":"py","ぷ":"pu","ぺ":"pe","ぽ":"po","きゃ":"kya","きゅ":"kyu","きょ":"kyo","しゃ":"sha","しゅ":"shu","しょ":"sho","ちゃ":"cha","ちゅ":"chu","ちょ":"cho","にゃ":"nya","にゅ":"nyu","にょ":"nyo","ひゃ":"hya","ひゅ":"hyu","ひょ":"hyo","みゃ":"mya","みゅ":"myu","みょ":"myo","りゃ":"rya","りゅ":"ryu","りょ":"ryo","ぎゃ":"gya","ぎゅ":"gyu","ぎょ":"gyo","じゃ":"ja","じゅ":"ju","じょ":"jo","ぢゃ":"ja","ぢゅ":"ju","ぢょ":"jo","びゃ":"bya","びゅ":"byu","びょ":"byo","ぴゃ":"pya","ぴゅ":"pyu","ぴょ":"pyo"};

const kana2roma = (s) => {
  const res = [];
  let tflg = false; // "っ" flg
  let nflg = false; // "ん" flg
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    let roma = null;
    if ("ゃゅょ".indexOf(s[i + 1]) >= 0) {
      roma = KANA_ROMA[s.substring(i, i + 2)];
      i++;
    } else if (c == "ー") {
      continue; // 長音記号は省略
    } else if (c == "っ") {
      tflg = true;
      continue; // 長音記号は省略
    } else if ("0123456789".indexOf(c) >= 0) {
      roma = "-" + c;
    } else {
      roma = KANA_ROMA[c];
    }
    if (!roma) {
      throw new Error("can't convert! " + s);
    }
    if (tflg) {
      if (roma[0] == "c") {
        res.push("t");
      } else {
        res.push(roma[0]);
      }
      tflg = false;
    }
    if (nflg) {
      if ("aiueoy".indexOf(roma[0]) >= 0) {
        res.push("-");
      }
      nflg = false;
    }
    res.push(roma);
    if (c == 'ん') {
      nflg = true;
    }
}
  const sres = res.join("");
  return sres.replace(/ou/g, "o").replace(/oo/g, "o").replace(/uu/g, "u"); // 本当は漢字を見る必要ある
};

const Romaji = {
  encode: kana2roma
};

export { Romaji, kana2roma };
