const express = require('express');
const app = express()
const cors = require('cors')
const todosRoutes = require('./todos.routes.js')

app.use(express.json())
app.use(cors())
app.use(todosRoutes)
app.get('/', (req, res) => {
    return res.send("Funcionando")
})
app.listen('3001', () => {
    console.log('rodando')
})