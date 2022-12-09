const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const AuthRouter = require('./routes/AuthRouter')
const MusicRouter = require('./routes/MusicRouter')
const LikedMusic = require('./routes/LikedMusicRouter')

const app = express()

const PORT = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

//routes
app.use('/auth', AuthRouter)
app.use('/music', MusicRouter)
app.use('/profile', LikedMusic)

app.listen(PORT, () => console.log(`Sever Running On Port: ${PORT}`))
