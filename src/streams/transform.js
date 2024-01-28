import { Transform, pipeline } from 'stream';
import { stdin, stdout } from "node:process";

  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, String(chunk).split('').reverse().join('')+'\n');
    }
});

const transform = async () => {
  stdin.pipe(transformStream).pipe(stdout);

};

await transform();