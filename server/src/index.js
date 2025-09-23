require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const reportsRouter = require('./routes/reports')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, '..', '..', 'uploads')))

app.use('/api/reports', reportsRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log('Server started on', PORT))
