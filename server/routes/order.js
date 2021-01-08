const express = require('express')
const router = express.Router()
const controller = require('../controlles/order')

router.post('/', controller.create)

module.exports = router
