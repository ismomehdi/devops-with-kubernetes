import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

let pong = 0

app.get('/', (req, res) => {
  res.send(`pong ${pong}`)
  pong++
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})
