const express = require('express')
const cors = require('cors')
const AuthRouter = require('./routes/AuthRouter')

const app = express()

const PORT = process.env.PORT || 3001

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.use('/auth', AuthRouter)

app.listen(PORT, () => console.log(`Sever Running On Port: ${PORT}`))
