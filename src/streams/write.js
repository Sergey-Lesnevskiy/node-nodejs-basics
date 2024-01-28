import path from "path";
import {createWriteStream} from "fs";
import { stdin } from "node:process";
import * as url from "url";


const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const pathFile = path.resolve(__dirname, "files", "fileToWrite.txt");

const write = async () => {
  //a+ Файл создается, если он не существует.
  stdin.pipe(createWriteStream(pathFile, { encoding: 'utf8', flags: 'a+' }));
};

await write();