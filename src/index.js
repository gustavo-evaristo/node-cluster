import os from 'os';
import cluster from 'cluster'
import { format } from 'path';

const runPrimaryProcess = () => {
  const processCount = os.cpus().length* 2;

  console.log(`primary ${process.pid} runnig`)
  console.log(`Forking server with ${processCount} processes \n`)

  for(let i = 0; i < processCount; i++) {
    cluster.fork();
  }
}

const runWorkerProcess = async () => {
  await import ('./server.js')
}

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess();