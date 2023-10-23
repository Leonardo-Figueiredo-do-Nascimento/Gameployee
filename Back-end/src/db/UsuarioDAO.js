const {criarPool} = require('./Conn')
const Desenvolvedor = require('../Users/Devs.js');

const pool = criarPool()

async function buscarDesenvolvedores(){
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from tb_usuarios', (err, res) => {
          if (!err) {
            resolve(res.rows);
          } else {
            reject(err.message);
          }
        });
      });
}

const novoDesenvolvedor = new Desenvolvedor('Leonardo','Programador','ubsoft@email.com','acMirage','888888888')

function inserirDesenvolvedor(novoDesenvolvedor){
    const query = 'INSERT INTO tb_usuarios(id_usuario, nome, cargo, email, senha, telefone) VALUES ($1,$2,$3,$4,$5,$6)'
    pool.query(query,[novoDesenvolvedor.id,novoDesenvolvedor.nome,novoDesenvolvedor.cargo,novoDesenvolvedor.email,novoDesenvolvedor.senha,novoDesenvolvedor.telefone],(err,res)=>{
        if(!err){
            console.log('Envio de dados feito')

        } else{
            console.log(err.message)
        }
    })
}


/* async function main(){
        const dadosDesenvolvedores = await buscarDesenvolvedores();
        console.log(dadosDesenvolvedores);
}

main() */

module.exports = {buscarDesenvolvedores, inserirDesenvolvedor}