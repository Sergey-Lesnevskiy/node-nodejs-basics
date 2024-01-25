import { writeFile } from "node:fs";
// import { writeFile } from 'fs/promises';
import path from "path";
import { fileURLToPath } from "url";

const create = async () => {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const data = "I am fresh and young";
  const errMessage = "FS operation failed";
  writeFile(
    path.resolve(__dirname, "files", "fresh.txt"),
    data,
    { flag: "wx" },
    (err) => {
      if (err) throw new Error(errMessage);
    }
  );
};

await create();
