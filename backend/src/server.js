const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const { errors } = require('celebrate')

const app = express()

app.use(cors())

app.use(express.json())

app.use(routes)

//catch all: captura todos os erros
app.use((error, request, response, next) => {
    response.status(error.status || 500)
    response.json({ error: error.message })
})

app.use(errors())

app.listen(3333)