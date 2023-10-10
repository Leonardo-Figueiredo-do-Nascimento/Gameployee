const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password:"aranha2001",
    database: 'Gameployee'
});

// Conectar ao banco de dados
client.connect()

client.query('SELECT * FROM tb_usuarios', (err,res)=>{
    if(!err){
        console.log(res.rows)
    } else{
        console.log(err.message)
    }
    client.end();
})