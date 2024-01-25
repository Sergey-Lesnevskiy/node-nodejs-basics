import path from 'path';
import  fs  from 'fs';


import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const INPUT_PATH = path.resolve(__dirname, 'files','fileToRemove.txt');

const errMessage = "FS operation failed";

const remove = async () => {
    fs.rm(INPUT_PATH,(err)=>{
      if (err) throw new Error(errMessage);
    })
};


await remove();