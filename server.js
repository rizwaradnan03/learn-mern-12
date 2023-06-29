const express = require('express')
const cors = require('cors')

const ReligionRoutes = require('./routes/ReligionRoutes')
const UserRoutes = require('./routes/UserRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/religion', ReligionRoutes)
app.use('/api/user', UserRoutes)

app.listen(4000, () => {
    console.log('Success Connected')
})