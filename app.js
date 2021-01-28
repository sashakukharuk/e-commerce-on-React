const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const WebSocket = require('ws')
const keys = require('./config/keys')
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const positionRoutes = require('./routes/position')
const orderRoutes = require('./routes/order')
const profileRoutes = require('./routes/profile')
const languageRouter = require('./routes/language')
const popularRouter = require('./routes/popular')
const chartRouter = require('./routes/chart')
const contactsRouter = require('./routes/contacts')
const logicChat = require('./chat/logicChat')


const app = express()
const server = require('http').createServer(app)
const wss = new WebSocket.Server({server})

wss.on('connection', ws => logicChat(ws))

mongoose.connect(keys.mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error))
app.use(passport.initialize())
require('./middleware/passport')(passport)
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/categories', categoryRoutes)
app.use('/api/position', positionRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/language', languageRouter)
app.use('/api/popular', popularRouter)
app.use('/api/charts', chartRouter)
app.use('/api/contacts', contactsRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('e-commerce/dist/e-commerce'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'e-commerce', 'dist', 'e-commerce', 'index.html'))
  })
}

module.exports = server
