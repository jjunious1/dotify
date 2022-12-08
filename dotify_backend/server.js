const express = require('express')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => console.log(`Sever Running On Port: ${PORT}`))
