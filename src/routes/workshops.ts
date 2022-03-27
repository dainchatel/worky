import express from 'express'

export const router = express.Router()

// add a router.use validator for workshop req.body

router.get('/workshops', (req, res) => {
    const allWorkshops = req.workshopService.list()
    res.send(allWorkshops)
})

router.get('/workshops/:id', (req, res) => {
    const foundWorkshop = req.workshopService.get(req.params.id)
    res.send(foundWorkshop)
})

router.post('/workshops', (req, res) => {
    const newWorkshop = req.workshopService.create(req.body)
    res.send(newWorkshop)
})

router.put('/workshops/:id', (req, res) => {
    const updatedWorkshop = req.workshopService.update(req.params.id, req.body)
    res.send(updatedWorkshop)
})

router.delete('/workshops/:id', (req, res) => {
    const deletedWorkshop = req.workshopService.delete(req.params.id)
    res.send(deletedWorkshop)
})