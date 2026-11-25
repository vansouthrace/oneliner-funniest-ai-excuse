import { mkdirSync, writeFileSync } from "node:fs";

// Entry: one line, 143 chars, under the 200-char gate.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I missed the deadline because I spent the whole day teaching a smaller model to write my apology, and it got stuck apologizing for the apology.");
