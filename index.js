const express = require('express')
const cors = require('cors')
const connectDatabase= require('./utils/connectDatabase')
const router = require('./routes/userRoutes.js')


const app = express()
const port = 8080
app.use(express.json())
app.use(cors())

app.use(router)

connectDatabase()

app.listen(port, () => {
    console.log(`Kindly be advised that your backend server has been successfully initiated and is presently operational on port ${port}`)
})