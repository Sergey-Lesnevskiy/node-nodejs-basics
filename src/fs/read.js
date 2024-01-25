import path from "path";
import { readFile } from "fs/promises";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_PATH = path.resolve(__dirname, 'files', 'fileToRead.txt');

const errMessage = "FS operation failed";

const list = async () => {
  try {
    readFile(INPUT_PATH,{ encoding: 'utf8' }).then((data) => {
      console.log(data);
    });
  } catch (error) {
    throw new Error(errMessage);
  }
};

await list();

const read = async () => {
    // Write your code here 
};

await read();