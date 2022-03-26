export const GenreName = [
    'fiction',
    'screenwriting',
    'poetry'
] as const

export type Genre = typeof GenreName[number]

export type WorkshopMeta = {
    forCredit: string,
}

export type WorkshopAttributes = {
    numberOfParticipants: number,
    genre: Genre,
    meta?: WorkshopMeta,
}

export type Workshop = WorkshopAttributes & {
    id: string,
}
