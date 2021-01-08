const express = require('express')
const router = express.Router()
const passport = require('passport')
const upload = require('../middleware/upload')
const controller = require('../controlles/position')
const cpUpload = upload.fields([{ name: 'imageMain', maxCount: 1 }, { name: 'imageLarge', maxCount: 1 }, { name: 'imageSmall', maxCount: 4 }])
router.get('/:id', controller.getById)
router.post('/', passport.authenticate('jwt', {session: false}), cpUpload, controller.create)

module.exports = router
