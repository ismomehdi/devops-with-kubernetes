import { createServer } from 'node:http';
import fs from 'node:fs';

const hostname = '127.0.0.1';
const port = process.env.PORT;

const server = createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
});

server.listen(port, hostname, () => {
  console.log(`Server started in port ${process.env.PORT}`);
});
