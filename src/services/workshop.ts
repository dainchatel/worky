import { WorkshopAttributes, Workshop, DataStore } from '../types'
import { randomUUID } from 'crypto'

export default class WorkshopService {
    dataStore: DataStore
    constructor(dataStore) {
        this.dataStore = dataStore
    }
    create(payload: WorkshopAttributes): Workshop {
        const newWorkshop = {
            id: randomUUID(),
            ...payload,
        }
        this.dataStore.workshops.push(newWorkshop)
        return newWorkshop
    }

    list(): Array<Workshop> {
        return this.dataStore.workshops
    }

    get(id: string): Workshop {
        return this.dataStore.workshops.find(workshop => workshop.id === id)
    }

    update(id: string, payload: Partial<WorkshopAttributes>): Workshop {
        this.dataStore.workshops = this.dataStore.workshops
            .map(workshop => workshop.id === id ? { ...workshop, ...payload } : workshop)
        return this.dataStore.workshops.find(workshop => workshop.id === id)
    }

    delete(id: string ): Workshop {
        const workshopToDelete = this.dataStore.workshops.find(workshop => workshop.id === id)
        this.dataStore.workshops = this.dataStore.workshops
            .filter(workshop => workshop.id !== id)
        return workshopToDelete
    }
}