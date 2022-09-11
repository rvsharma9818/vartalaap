const express = require('express')
const router = express.Router();
const userController = require('../controllers/user')
const checkAuth = require('../middleware/checkAuth')
const io = require('socket.io-client')
const socket = io(process.env.BASE_URL)

router.get('/socket', (req, res) => {
    socket.emit('showUsers', null)
    res.status(200).json({ message: 'done' })
})
router.post('/', userController.uploadImage, userController.registerUser)
router.get('/search-users', checkAuth, userController.searchUsers)
router.patch('/disconnect', userController.disconnectUser)
router.patch('/image', checkAuth, userController.updateProfileImg)
router.patch('/', checkAuth, userController.updateUserInfo)
router.patch('/password', checkAuth, userController.updateUserPassword)
router.get('/', checkAuth, userController.getUsers)
router.get('/bytoken', checkAuth, userController.getUserBytoken)
router.get('/:id', userController.getUser)
router.post('/login', userController.userLogin)


module.exports = router
