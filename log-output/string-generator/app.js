import { createServer } from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { v4 as uuidv4 } from 'uuid';

const hostname = '0.0.0.0';
const port = process.env.PORT || 3001;
const filesDir = '/usr/src/app/files';

const writeOutput = () => {
  const randomString = `${new Date()}: ${uuidv4()}`
  if (!fs.existsSync(filesDir)) fs.mkdirSync(filesDir, { recursive: true });
  fs.writeFileSync(path.join(filesDir, 'output.txt'), randomString + '\n');
  console.log('Output written to file');
}

const server = createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
});

server.listen(port, hostname, () => {
  console.log(`Server started in port ${port}`);
  writeOutput();
});
