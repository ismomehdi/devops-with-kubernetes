import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = process.env.PORT;

const server = createServer();

server.listen(port, hostname, () => {
  console.log(`Server started in port ${process.env.PORT}`);
});
