const express = require('express')
const router = express.Router()
const controller = require('../controlles/contacts')

router.get('/', controller.getAll)
router.post('/', controller.create)
router.patch('/:id', controller.update)

module.exports = router
