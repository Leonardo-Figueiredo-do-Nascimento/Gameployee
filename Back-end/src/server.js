const express = require('express');

const server = express();

server.get('/Usuario/Vagas',(req,res) => {
    res.send('<h1>Lista de vagas</h1>')
})

server.listen(5173,()=>{
    console.log("Servidor conectado")
})