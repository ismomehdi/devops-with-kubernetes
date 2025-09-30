import express from 'express'
import fs from 'node:fs';

const app = express()
const PORT = process.env.PORT || 3000

const outputFilePath = '/usr/src/app/files/output.txt';

app.get('/', (req, res) => {
  fs.readFile(outputFilePath, async (err, data) => {
    if (err) throw err;
    const pongValue = await getPingPongValue();
    res.send(`${data.toString()}\nPing \ Pongs: ${pongValue}`);
  });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

const getPingPongValue = async () => {
  const response = await fetch('http://ping-pong-svc:2345/pings');
  const currentValue = parseInt(await response.text());
  return currentValue;
}

