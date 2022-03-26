import express from 'express'
import dotenv from 'dotenv'
import { logger } from './logger'
import { httpStatusCodes } from './consts'

dotenv.config()
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    const ip = req.socket.remoteAddress || req.header('x-forwarded-for')
    logger.info({ ip })
    res.sendStatus(httpStatusCodes.OK)
})

app.get('/health', (req, res) => {
    res.sendStatus(httpStatusCodes.OK)
})

app.listen(port, () => {
    return logger.info(`Express is listening at http://localhost:${port}`)
})