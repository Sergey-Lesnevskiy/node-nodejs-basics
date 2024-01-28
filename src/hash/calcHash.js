import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import * as url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToFile = path.join(__dirname, './files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const fileContent = await readFile(pathToFile);

  const hash = createHash('sha256').update(fileContent).digest('hex');

  console.log(hash);
};

await calculateHash();