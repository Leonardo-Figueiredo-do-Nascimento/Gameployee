const express = require('express');

const server = express();

server.get('/',(req,res) => {
    res.send('<h1>Lista de vagas</h1>')
})

server.get('/json',(req,res) => {
    res.json({name:'João alguma coisa',idade:'34'})
})

server.listen(3000,()=>{
    console.log("Servidor conectado")
})