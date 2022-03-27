import WorkshopService from '../../services/workshop'
import { WorkshopAttributes } from '../../types'

describe('test tests', () => {
    test('sum', () => {
        expect(1+1).toBe(2)
    })
})

describe('workshop service tests', () => {
    const workshopService = new WorkshopService()
    test('it should create a workshop', () => {
        const payload: WorkshopAttributes = {
            numberOfParticipants: 8,
            genre: 'fiction',
        }
        const workshop = workshopService.create(payload)
        
        expect(workshop.numberOfParticipants).toBe(8)
        expect(workshop.genre).toBe('fiction')
    })
})