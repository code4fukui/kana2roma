import * as t from "https://deno.land/std/testing/asserts.ts";

import { Romaji } from "./Romaji.js";

Deno.test("simple", () => {
  t.assertEquals(Romaji.encode("あいう"), "aiu");
  t.assertEquals(Romaji.encode("かさん"), "kasan");
  t.assertEquals(Romaji.encode("きゃんせる"), "kyanseru");
});
Deno.test("long", () => {
  t.assertEquals(Romaji.encode("わーい"), "wai");
});
Deno.test("n", () => {
  t.assertEquals(Romaji.encode("しんいけちょう"), "shin-ikecho");
});
Deno.test("ou", () => {
  t.assertEquals(Romaji.encode("とうきょう"), "tokyo");
});
Deno.test("xtsu", () => {
  t.assertEquals(Romaji.encode("ほっかいどう"), "hokkaido");
});
Deno.test("xtsu2", () => {
  t.assertEquals(Romaji.encode("ぶっちいん"), "butchiin");
});
Deno.test("1chome", () => {
  t.assertEquals(Romaji.encode("しんよこえ1ちょうめ"), "shin-yokoe-1chome");
});
