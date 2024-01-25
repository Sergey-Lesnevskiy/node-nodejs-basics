import path from 'path';
import { mkdir, readdir, copyFile } from 'fs/promises';


import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_PATH = path.resolve(__dirname, 'files_copy');
const INPUT_PATH = path.resolve(__dirname, 'files');

const errMessage = "FS operation failed";

const copy = async () => {
    try {
    mkdir(OUTPUT_PATH)
      .then(() => {
      readdir(INPUT_PATH, { withFileTypes: true })
        .then((files) => {
          files.forEach((file) => {
            if (file.isFile()) {
            copyFile(
                  path.join(__dirname, "files", file.name),
                  path.join(__dirname, "files_copy", file.name)
                )
            }
          });
        });
    }).catch(()=> {throw new Error(errMessage)});
  } catch (err) {
    throw new Error(errMessage);
  } 
};

await copy();
