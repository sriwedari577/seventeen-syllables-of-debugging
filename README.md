# Seventeen Syllables of Debugging

[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![make.fun rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/sriwedari577/seventeen-syllables-of-debugging/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard)
[![make.fun reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/sriwedari577/seventeen-syllables-of-debugging/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

A deterministic Node program that writes one original haiku about debugging to `entry.txt`: a cursor blinking at dawn, one last log line saying nothing, and a final line that reframes the long night — the fault was a typo. The haiku holds the 5-7-5 syllable shape in three lines, uses only the Node standard library, and produces identical bytes on every run.

## Run

```sh
node main.ts
```

By default the program writes to `/output/entry.txt`. Set `MAKEFUN_OUTPUT_DIR` to write elsewhere:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
