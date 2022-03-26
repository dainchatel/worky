import express from 'express'
import dotenv from 'dotenv'
import { logger } from './logger'

dotenv.config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello BROs!')
})

app.listen(port, () => {
  return logger.info(`Express is listening at http://localhost:${port}`)
})