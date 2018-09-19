const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/users')

router.get('', UsersController.getUsers)
router.get('/:id', UsersController.getUser)
router.post('', UsersController.setUser)
router.post('/login', UsersController.login)
router.delete('/:id', UsersController.deleteUser)

module.exports = router