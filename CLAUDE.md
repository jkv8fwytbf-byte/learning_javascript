# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal, from-scratch **learning** repository for JavaScript — not an application. Files are self-contained lessons and exercises, not modules that import one another. There is no package.json, build step, test suite, or linter. The audience is a beginner (the repo owner), so **clarity and teaching value outweigh cleverness or brevity**. Prefer plain, explicit code over idiomatic shortcuts a newcomer wouldn't recognize.

## Running code

Two execution contexts, one per top-level folder:

- **Node (terminal)** — everything under `01-basics/`. Run a single file directly:
  ```bash
  node 01-basics/1.hello.js
  node 01-basics/operators/1.operators.js
  ```
  There is no test runner; "running a file" *is* how you verify it. The dev loop is: edit → save → re-run the same `node ...` command.

- **Browser** — `02-browser/`. Open `02-browser/index.html` in a browser (no server needed). `1.script.js` is loaded via a `<script>` tag at the end of `<body>` so the DOM exists before it runs. This code uses `document`/DOM APIs and will **not** run under Node.

## Conventions to preserve when editing or adding files

- **Lesson file shape:** most `01-basics/` files follow a pattern — a top comment explaining the concept in plain English, then small runnable examples with `console.log`, then a trailing `// Try it:` comment block suggesting exercises. Keep this shape when adding lessons.
- **Numbered topic files** (`1.hello.js`, `operators/2.arithmetic.js`, …) denote lesson order. `README.md`'s "Suggested order" section is the canonical learning sequence — update it when adding lessons.
- Files are standalone: no `require`/`import`/`export` between lesson files, no shared state. Don't introduce a module graph or bundler.

## README

`README.md` is written *for the learner* and explains the two-context model and daily workflow. Keep it beginner-facing (that audience, not future contributors) if you edit it.
