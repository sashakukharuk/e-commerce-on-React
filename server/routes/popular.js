const express = require('express')
const router = express.Router()
const controller = require('../controlles/popular')

router.get('/', controller.getAll)

module.exports = router
