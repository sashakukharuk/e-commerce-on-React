const express = require('express')
const router = express.Router()
const controller = require('../controlles/chart')

router.get('/:id', controller.getById)

module.exports = router
