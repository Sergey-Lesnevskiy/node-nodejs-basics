
import { createGunzip } from 'node:zlib';
// если createGzip  , то должен быть createGunzip , а не createUnzip
import { pipeline } from 'node:stream';
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import path from "path";

import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const gzip = createGunzip();
const fileOut = createReadStream(path.resolve(__dirname, "files", "archive.gz"));
const fileIn = createWriteStream(path.resolve(__dirname, "files", 'fileToCompress2.txt'));


const decompress = async () => {
  pipeline(fileOut, gzip, fileIn, (err) => {
    if (err) {
      console.error('An error occurred:', err);
    }
  });
};

decompress();