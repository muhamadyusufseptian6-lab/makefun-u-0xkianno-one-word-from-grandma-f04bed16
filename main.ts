// One Word From Grandma — entry program (Node 22, stdlib only, deterministic).
//
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt: the single word
// a grandma would text about AI.
//
// The word: "Al".
// Grandma reads the letters "A.I." out loud and hears a man's name.
// She is quite sure Al is a lovely young man who knows everything,
// types very fast, and never minds being asked the same question twice.
// She texts him the way she texts her grandkids: warmly, briefly, and
// absolutely convinced she has his name right — she has even started
// asking Al for recipes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const inputDir = process.env.MAKEFUN_INPUT_DIR ?? "/input";
void inputDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const word = "Al";
writeFileSync(join(outputDir, "entry.txt"), word, "utf8");
