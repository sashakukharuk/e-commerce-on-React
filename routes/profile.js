const express = require('express')
const router = express.Router()
const passport = require('passport')
const controller = require('../controlles/profile')

router.get('/', passport.authenticate('jwt', {session: false}), controller.getById)
router.post('/', controller.create)

module.exports = router
