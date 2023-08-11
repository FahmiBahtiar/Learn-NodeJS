import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("zlib.mjs");
const result = zlib.gzipSync(source);

console.info(source.toString());

fs.writeFileSync("zlib.mjs.txt", result)