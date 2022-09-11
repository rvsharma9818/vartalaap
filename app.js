const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')
const conversationRoutes = require('./routes/conversation')
const bodyParser = require('body-parser')
const io = require('socket.io-client')
const socket = io(process.env.BASE_URL)
const fileUpload = require('express-fileupload')
require('dotenv').config()

const app = express()

app.use(fileUpload({
    useTempFiles: true
}))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_INFO, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
app.use(express.static('dist/client'));

app.use('/user', userRoutes)
app.use('/conversation', conversationRoutes)
app.get('/status', (req, res) => {
    socket.emit('showUsers', null)
    res.send('done')
})



module.exports = app