const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.use('/api', require('./api/employees').router)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})