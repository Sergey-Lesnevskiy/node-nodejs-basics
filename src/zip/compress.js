import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import path from "path";

import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const gzip = createGzip();
const fileOutPath = createReadStream(path.resolve(__dirname, "files", "fileToCompress.txt"));
const fileInPath = createWriteStream(path.resolve(__dirname, "files", 'archive.gz'));



const compress = async () => {
  pipeline(fileOutPath, gzip, fileInPath, (err) => {
    if (err) {
      console.error('An error occurred:', err);
    }
  });
  
};

await compress();