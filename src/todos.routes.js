const express = require('express')

const todosRoutes = express.Router()
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()


todosRoutes.post('/todos', async (req, res) => {
    const {name, status} = req.body 
    const todo = await prisma.todo.create({data:{
        name, 
        status
    }})
    return res.status(201).json(todo)

})

todosRoutes.get('/todos', async (req, res) => {
    const results = await prisma.todo.findMany()
    return res.status(200).json(results)
})

module.exports = todosRoutes