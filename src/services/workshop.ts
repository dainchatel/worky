import { WorkshopAttributes, Workshop } from '../types'
import { randomUUID } from 'crypto'

export default class WorkshopService {
    create(payload: WorkshopAttributes): Workshop {
        return {
            id: randomUUID(),
            ...payload,
        }
    }
}