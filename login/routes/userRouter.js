const express = require('express')
const controller = require('../controllers/userController')
const authController = require('../controllers/authContoller')
const router = express.Router()

router.post('/login',authController.login)
router.post('/sign',authController.signup)
router.post('/signup', controller.createInfo )
router.get('/getUser', controller.getAllInfo)
router.get('/user/:id',controller.getInfo)
router.post('/delete/:id', controller.deleteInfo)
router.patch('/update/:id', controller.updateInfo)

module.exports = router