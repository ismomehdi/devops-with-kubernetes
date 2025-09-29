import express from 'express'
import fs from 'node:fs'
import path from 'node:path'

const app = express()
const PORT = process.env.PORT || 3000

const CACHE_DIR = '/usr/src/app/files'
const IMAGE_PATH = path.join(CACHE_DIR, 'image.jpg')
const META_PATH = path.join(CACHE_DIR, 'meta.json')

const TTL = 10 * 60 * 1000
const IMAGE_URL = 'https://picsum.photos/1200'

app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on port ${PORT}`))

app.get('/todos', (_req, res) => res.sendFile('index.html', { root: process.cwd() }))

app.get('/cached-image', async (_req, res) => {
  try {
    await getImageIfNeeded()
    res.sendFile(IMAGE_PATH)
  } catch (err) {
    console.error(err)
    res.status(500)
  }
})


async function getImageIfNeeded() {
  if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true })

  const imageExists = fs.existsSync(IMAGE_PATH)
  const meta = readMeta()
  if (!meta || !imageExists) return fetchImage()
  
  const age = Date.now() - meta.fetchedAt
  if (age > TTL) fetchImage()
}

async function fetchImage() {
  try {
    const res = await fetch(IMAGE_URL)
    if (!res.ok) throw new Error(`Failed to fetch image: ${res.status}`)

    const buffer = Buffer.from(await res.arrayBuffer())
    fs.writeFileSync(IMAGE_PATH, buffer)
    console.log('Fetched new image')

    const meta = { fetchedAt: Date.now() }
    fs.writeFileSync(META_PATH, JSON.stringify(meta))
    console.log('Wrote new metadata')

  } catch (err) {
    console.error(err)
  }
}

function readMeta() {
  try {
    return JSON.parse(fs.readFileSync(META_PATH, 'utf8'))
  } catch {
    return null
  }
}
