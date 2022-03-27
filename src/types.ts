import WorkshopService from './services/workshop'

export const GenreName = [
    'fiction',
    'screenwriting',
    'poetry'
] as const

export type Genre = typeof GenreName[number]

export type WorkshopMeta = {
    forCredit: boolean,
}

export type WorkshopAttributes = {
    numberOfParticipants: number,
    genre: Genre,
    meta?: WorkshopMeta,
}

export type Workshop = WorkshopAttributes & {
    id: string,
}

export type DataStore = {
    workshops: Array<Workshop>
}

declare global {
    namespace Express {
      interface Request {
        workshopService: WorkshopService
      }
    }
  }
