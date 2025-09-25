import fs from 'node:fs';
import path from 'node:path';
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000
const filesDir = '/usr/src/app/files';
const filePath = path.join(filesDir, 'ping-pong.txt');

app.get('/pingpong', (req, res) => {
  writeFile();
  res.send(`pong ${getCurrentValue()}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  writeFile();
})

const writeFile = () => {
  if (!fs.existsSync(filesDir)) fs.mkdirSync(filesDir, { recursive: true });

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '1\n');
    console.log('File created with initial value 1');
  } else {
    const currentValue = getCurrentValue();
    const newValue = currentValue + 1;
    fs.writeFileSync(filePath, newValue.toString() + '\n');
    console.log(`File updated with new value ${newValue}`);
  }
}

const getCurrentValue = () => {
  const data = fs.readFileSync(filePath, 'utf-8');
  const currentValue = parseInt(data);
  return currentValue;
}
