const express = require('express')
const router = express.Router()
const controller = require('../controlles/language')

router.post('/new', controller.create)
router.get('/:name', controller.get)
router.patch('/:name', controller.update)

module.exports = router
