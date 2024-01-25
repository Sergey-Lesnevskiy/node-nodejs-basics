import path from 'path';
import  fs  from 'fs';


import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_PATH = path.resolve(__dirname, 'files', 'properFilename.md');
const INPUT_PATH = path.resolve(__dirname, 'files','wrongFilename.txt');

const errMessage = "FS operation failed";

const rename = async () => {
    fs.rename(
      INPUT_PATH,
      OUTPUT_PATH,(err)=>{
        if (err) throw new Error(errMessage);
      }
    )
};

await rename();