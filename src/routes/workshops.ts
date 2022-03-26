import express from 'express'

export const router = express.Router()

router.get('/workshops', (req, res) => {
    res.send('SHOW ALL WORKSHOPS')
})

router.get('/workshops/:id', (req, res) => {
    res.send(`SHOWING WORKSHOP ${req.params.id}`)
})

router.post('/workshops', (req, res) => {
    res.send('CREATING WORKSHOP')
})
router.put('/workshops/:id', (req, res) => {
    res.send(`UPDATING WORKSHOP ${req.params.id}`)
})
router.delete('/workshops/:id', (req, res) => {
    res.send(`DELETING WORKSHOP ${req.params.id}`)
})