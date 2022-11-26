const express = require('express')

const todosRoutes = express.Router()
const {PrismaClient} = require('@prisma/client')
const { response } = require('express')

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

todosRoutes.put('/todos', async (req, res) => {
    const {id, name, status} = req.body 

    if (!id) return res.status(400).json('id is required')
    const idCheck = await prisma.todo.findUnique({where: {id}})
    if (!idCheck){ return res.status(404).json("Id not found")}
    const todo = await prisma.todo.update({
        where: {
            id,
        }, 
        data: {
            name,
            status
        }
    })
    return res.status(200).json(todo)
})
module.exports = todosRoutes