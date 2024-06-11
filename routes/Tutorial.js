const express = require('express')
const Tutorial = require('../models/tutorial')
const router = express.Router()

router.get('/', (req, resp) => {
    Tutorial.find().then(data => {
        resp.json(data)
    }).catch(e => {
        resp.json({ message: e })
    })
})

module.exports = router;