import fs from 'node:fs';
const ENTRY = "I missed the deadline because I spent six hours optimizing a function that runs once a year. It runs beautifully now.";
fs.mkdirSync('/output', { recursive: true });
fs.writeFileSync('/output/entry.txt', ENTRY, 'utf8');
