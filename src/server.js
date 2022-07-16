import http from 'http';
const processID = process.pid;

const server = http.createServer((request, response) => {
  for(let index = 0 ; index < 1e7 ; index++);
  response.end(`handled by pid ${processID}`)
})

server.listen(3000).once('listening', () => console.log(`server started in process ${processID}`))

process.on('SIGTERM', () => server.close(() => process.exit()))

export default server;