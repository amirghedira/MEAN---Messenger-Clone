const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/user')
const messageRoutes = require('./routes/message')

const app = express()
app.use(cors())

mongoose.connect(process.env.MONGO_INFO, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})


app.use('/user', userRoutes)
app.use('/message', messageRoutes)



module.exports = app