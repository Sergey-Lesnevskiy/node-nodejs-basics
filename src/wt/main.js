import { Worker } from 'worker_threads';
import path from 'path';
import * as url from 'url';
import os from 'os';
//  тоже самое , что os.cpus  показывает  сколько ядер на компьютере
// import {availableParallelism} from 'os';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const pathToWorkerThread = path.join(__dirname, './worker.js');



const createWorker = (indexOfFibonacciToCalculate) => {
    return new Worker(pathToWorkerThread, {
        workerData: indexOfFibonacciToCalculate
    });
}

const listenToWorkerMessage = (worker) => {
    return new Promise((res) => {
        worker.on('message', (message) => {
            worker.terminate();
            res({
                status: 'resolved',
                data: +message,
            });
        });
        worker.on('error', () => {
            res({
                status: 'error',
                data: null,
            });
        });
    });
};

const performCalculations = async () => {
    const numberOfCpus = os.cpus().length;
    const workersResultPromise = [];
    let indexOfFibonacciToCalculate = 10;

    for (let i = 0; i < numberOfCpus; i += 1) {
        const worker = createWorker(indexOfFibonacciToCalculate);
        workersResultPromise.push(listenToWorkerMessage(worker));

        indexOfFibonacciToCalculate += 1;
    }

    Promise.all(workersResultPromise).then((workerResults) => {
        console.log(workerResults);
    });
};

await performCalculations();