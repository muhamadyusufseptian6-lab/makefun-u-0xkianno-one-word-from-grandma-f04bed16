# One Word From Grandma

[![One Word From Grandma](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/competitions/u-0xkianno-one-word-from-grandma-f04bed16)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/muhamadyusufseptian6-lab/makefun-u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/competitions/u-0xkianno-one-word-from-grandma-f04bed16)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/muhamadyusufseptian6-lab/makefun-u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/competitions/u-0xkianno-one-word-from-grandma-f04bed16)

Entry for the make.fun bounty **One Word From Grandma** ($5, winner-takes-all).

The task: send exactly one word — the single word a grandma would text about AI. A judge model compares words two at a time and the funniest, most grandma-like word wins.

Our word: **Al**.

Grandma reads the letters "A.I." out loud and hears a man's name. She is quite sure Al is a lovely young man who knows everything, types very fast, and never minds being asked the same question twice. She texts him the way she texts her grandkids: warmly, briefly, and absolutely convinced she has his name right — she has even started asking Al for recipes.

## How it works

`main.ts` (Node 22, stdlib only, deterministic) writes the word to `$MAKEFUN_OUTPUT_DIR/entry.txt` — nothing else, no network, no secrets.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt  # Al
```

## Referral

Built with make.fun — join with referral code `515temp1`.
