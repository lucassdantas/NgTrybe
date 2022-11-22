const keys = require('./keys.js')
const express = require ('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(bodyParser.json())

const {Pool} = require('pg')
const pgCliente = new Pool({
    user:keys.pgUser,
    host:keys.pgHost,
    database: keys.pgDatabase,
    password:keys.pgPassword,
    port: keys.pgPort
})

pgCliente.on('connect', cliente => {
    cliente.query(`CREATE TABLE IF NOT EXISTS Accounts(
        id int primary key,
        balance money
    );`).catch(err => console.log(err))
    cliente.query(`CREATE TABLE IF NOT EXISTS Users(
        id int primary key,
        username unique varchar(30),
        password varchar(30),
        accountId int, 
        FOREIGN KEY Account(id) REFERENCES accountId
    );`).catch(err => console.log(err))
    cliente.query(`CREATE TABLE IF NOT EXISTS Transactions(
        id int primary key,
        debitedAccountId int,
        creditedAccountId int,
        value money,
        createdAt date
        FOREIGN KEY debitedAccountId REFERENCES Accounts(id),
        FOREIGN KEY creditedAccountId REFERENCES Accounts(id)
    );`).catch(err => console.log(err))

})
app.get('/', async (req, res) => {
    let x = await pgCliente.query('select * from Users;')
    res.send(x)
    
})

app.listen('3000', erro => console.log('pronto'))