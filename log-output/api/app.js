import express from 'express'
import fs from 'node:fs';

const app = express()
const PORT = process.env.PORT || 3000
const outputFilePath = '/usr/src/app/files/output.txt';

app.get('/', (req, res) => {
  fs.readFile(outputFilePath, (err, data) => {
    if (err) throw err;
    res.send(data.toString());
  });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
