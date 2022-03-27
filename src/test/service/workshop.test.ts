import WorkshopService from '../../services/workshop'
import { WorkshopAttributes } from '../../types'

describe('workshop service tests', () => {
    const dataStore = {
        workshops: [],
    }
    const workshopService = new WorkshopService(dataStore)
    // this is weird for sure
    const firstPayload: WorkshopAttributes = {
        numberOfParticipants: 6,
        genre: 'screenwriting',
    }

    let secondWorkshopId: string
    const secondPayload: WorkshopAttributes = {
        numberOfParticipants: 9,
        genre: 'poetry',
        meta: {
            forCredit: true,
        },
    }

    let thirdWorkshopId: string
    const thirdPayload: WorkshopAttributes = {
        numberOfParticipants: 19,
        genre: 'fiction',
    }

    test('it should create workshops', () => {
        const firstWorkshop = workshopService.create(firstPayload )
        const secondWorkshop = workshopService.create(secondPayload )
        secondWorkshopId = secondWorkshop.id
        const thirdWorkshop = workshopService.create(thirdPayload )
        thirdWorkshopId = thirdWorkshop.id
        
        expect(firstWorkshop.numberOfParticipants).toBe(6)
        expect(firstWorkshop.genre).toBe('screenwriting')
        expect(secondWorkshop.numberOfParticipants).toBe(9)
        expect(secondWorkshop.genre).toBe('poetry')
        expect(secondWorkshop.meta.forCredit).toBe(true)
        expect(thirdWorkshop.numberOfParticipants).toBe(19)
        expect(thirdWorkshop.genre).toBe('fiction')
    })

    test('it should list workshops', () => {
        const workshops = workshopService.list()
        expect(workshops.length).toBe(3)
    })

    test('it should get a single workshop', () => {
        const workshop = workshopService.get(secondWorkshopId )
        expect(workshop.genre).toBe(secondPayload.genre)
        expect(workshop.numberOfParticipants).toBe(secondPayload.numberOfParticipants)
    })

    test('it should update a workshop', () => {
        const updatePayload = {
            numberOfParticipants: 7,
            meta: {
                forCredit: false,
            },
        }
        const workshop = workshopService.update(secondWorkshopId, updatePayload )
        expect(workshop.numberOfParticipants).toBe(7)
        expect(workshop.meta.forCredit).toBe(false)
        const allWorkshops = workshopService.list()
        const updatedWorkshop = allWorkshops.find(workshop => workshop.id === secondWorkshopId)
        expect(updatedWorkshop.numberOfParticipants).toBe(7)
        expect(updatedWorkshop.meta.forCredit).toBe(false)
    })

    test('it should delete a workshop', () => {
        const workshop = workshopService.delete(thirdWorkshopId)
        expect(workshop.numberOfParticipants).toBe(thirdPayload.numberOfParticipants)
        expect(workshop.genre).toBe(thirdPayload.genre)
        const allWorkshops = workshopService.list()
        expect(allWorkshops.length).toBe(2)
        const deletedWorkshop = allWorkshops.find(workshop => workshop.id === thirdWorkshopId)
        expect(deletedWorkshop).toBeUndefined()
    })


})