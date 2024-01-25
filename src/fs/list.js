import path from "path";
import { readdir } from "fs/promises";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_PATH = path.resolve(__dirname, "files");

const errMessage = "FS operation failed";

const list = async () => {
  try {
    readdir(INPUT_PATH).then((data) => {
      console.log(data);
    });
  } catch (error) {
    throw new Error(errMessage);
  }
};

await list();
