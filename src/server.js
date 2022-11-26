const express = require ('express')
const app = express()
const todosRoutes = require('./todos.routes.js')

app.use(express.json())
app.use(todosRoutes)
app.get('/', (req, res) => {
    return res.send("Funcionando")
})
app.listen('3000', () => {
    console.log('rodando')
})