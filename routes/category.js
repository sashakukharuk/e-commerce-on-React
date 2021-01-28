const express = require('express')
const router = express.Router()
const passport = require('passport')
const controller = require('../controlles/category')

router.get('/', controller.getAll)
router.get('/:id', controller.getCategoryId)
router.post('/', controller.create)
router.patch('/:id', controller.update)

module.exports = router
