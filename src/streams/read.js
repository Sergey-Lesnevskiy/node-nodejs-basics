import { stdout } from "node:process";
import path from "path";
import {createReadStream} from "fs";

import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathFile = path.resolve(__dirname, "files", "fileToRead.txt");

const read = async () => {
      const stream = createReadStream(pathFile)
  stream.on('data', (chunk)=>{
  stdout(chunk)
  })
  .on('end', ()=>{
    console.log('closed to read');
    });
};

await read();
