const express = require('express')

const allTodos = []
const todosRoutes = express.Router()

todosRoutes.post('/todos', (req, res) => {
    const {name, status} = req.body
    allTodos.push({name, status})
    return res.status(201).json(allTodos)


})


module.exports = todosRoutes