import path from 'path';
import * as url from 'url';
import childProcess from 'child_process';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

let child;

const spawnChildProcess = async (args) => {
    const pathToChildProcess = path.join(__dirname, './files/script.js');

    child = childProcess.fork(pathToChildProcess, args, {
        silent: true
    });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};


// Put your arguments in function call to test this functionality
spawnChildProcess( [1,'a',2,'B',3,'C']);