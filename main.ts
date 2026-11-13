// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke,
// a one-liner about AI coding agents, to /output/entry.txt.
// The gate takes UTF-8 text of 1 to 280 characters, not only white space;
// the judge reads exactly the bytes written, so no trailing line end.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke, in three beats: a small, fully-specified task (the setup every
// developer recognises), a 47-file refactor with zero tests (the escalation),
// and a punchline that lands on the one thing the agent has never done:
// been on call for its own code. One line, no explanation, nothing stock.
const JOKE =
  'I gave my agent one small task and full context; it returned with a 47-file refactor, zero tests, and the confidence of a man who has never been on call.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
