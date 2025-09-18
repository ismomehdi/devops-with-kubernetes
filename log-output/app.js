import { v4 as uuidv4 } from 'uuid';
import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  const randomString = uuidv4()
  res.send(`${new Date()}: ${randomString}`)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
