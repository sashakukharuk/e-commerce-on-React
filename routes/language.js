const express = require('express')
const router = express.Router()
const controller = require('../controlles/language')

router.post('/new', controller.create)
router.get('/:name', controller.get)
router.patch('/:id', controller.update)

module.exports = router
