// Seventeen Syllables of Debugging.
// One original haiku about debugging, written deterministically
// to entry.txt. No clock, no randomness, no network: the same bytes
// on every run. The picture is a cursor blinking at dawn and a final
// log line saying nothing; the last line turns it — the fault was
// a typo.
// 5-7-5 recount: Cursor(2) blinks(1) at(1) dawn(1) / One(1) last(1) log(1) line(1) says(1) nothing(2) / It(1) was(1) my(1) typo(2); line 3 turns line 2 — the fault was my own typo.

import * as fs from "node:fs";
import * as path from "node:path";

const HAIKU =
  "Cursor blinks at dawn\nOne last log line says nothing\nIt was my typo\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), HAIKU, "utf8");
