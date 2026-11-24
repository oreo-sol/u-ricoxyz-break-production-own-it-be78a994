import { writeFileSync, mkdirSync } from "node:fs";

const part1 = "I deleted the production database. ";
const part2 = "The backup was a folder named 'backup_final_FINAL' and it was empty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", part1 + part2);
