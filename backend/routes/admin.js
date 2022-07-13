var express = require('express')
const router = express.Router()
const adminController = require('../controller/adminController')

router.post('/',adminController.create)

router.post('/login',adminController.login)

module.exports = router