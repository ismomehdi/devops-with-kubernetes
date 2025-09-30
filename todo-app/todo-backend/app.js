import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on port ${PORT}`))

const todos = []

app.get('/todos', (_req, res) => {
  res.json(todos)
})

app.post('/todos', express.json(), (req, res) => {
  const todo = req.body
  if (!todo) return res.status(400).json({ error: 'Invalid todo' })
  
  todos.push({ id: todos.length + 1, ...todo })
  res.status(201).json(todo)
})
