import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

import { router as workshopsRouter } from './routes/workshops'
import { logger } from './logger'
import { httpStatusCodes } from './consts'
import { DataStore } from './types'
import WorkshopService from './services/workshop'

dotenv.config()
const port = process.env.PORT
const dataStore: DataStore = {
    workshops: [],
}

const app = express()

app.use(bodyParser.json())

app.use((req, _res, next) => {
    req.workshopService = new WorkshopService(dataStore)
    next()
})
app.use(workshopsRouter)

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