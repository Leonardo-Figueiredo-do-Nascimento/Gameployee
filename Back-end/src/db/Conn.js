const { Client , Pool } = require('pg');

/* const client = new Client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password:"aranha2001",
    database: 'Gameployee'
});

// Conectar ao banco de dados
function conectar(){
    client.connect()

    client.query('SELECT * FROM tb_empresas', (err,res)=>{
        if(!err){
            console.log(res.rows)
        } else{
            console.log(err.message)
        }
        client.end();
    })
} */

const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    port: 5432,
    password:"aranha2001",
    database: 'Gameployee'
};
  
  // Função que cria e retorna um pool de conexões
function criarPool() {
    const pool = new Pool(dbConfig);
    return pool;
}
  
const pool = criarPool();


 module.exports = {
    criarPool,
};
 