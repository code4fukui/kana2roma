import { StrictCSV } from "https://code4fukui.github.io/StrictCSV/js/StrictCSV.js";

const url = "https://code4fukui.github.io/BaseRegistry/ヘボン式ローマ字.csv";
const data = await StrictCSV.fetch(url);
//console.log(data);


const map = {};
data.forEach(d => { map[d.日本語音] = d.ヘボン式ローマ字つづり });

console.log("// " + url);
console.log("const KANA_ROMA = " + JSON.stringify(map) + ";");
