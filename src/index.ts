import os from 'os';
import cluster from 'cluster'

const runPrimaryProcess = () => {
  const processCount = os.cpus().length * 2;

  console.log(`primary ${process.pid} runnig`);
  console.log(`Forking server with ${processCount} processes \n`);

  for(let i = 0; i < processCount; i++) {
    cluster.fork();
  }
      
  cluster.on('exit', (worker, code) => {
    if (code !== 0 && !worker.exitedAfterDisconnect) {
      console.log(`Worker ${worker.process.pid} died... scheduling another one!`);
      cluster.fork();
    }
  })
}

const runWorkerProcess = async () => {
  await import ('./server')
}

cluster.isPrimary ? runPrimaryProcess() : runWorkerProcess();