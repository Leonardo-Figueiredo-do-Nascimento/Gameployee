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

async function logarDev(email,senha, callback){
    const query = 'SELECT * FROM tb_usuarios WHERE email = $1 AND senha = $2'
    pool.query(query,[email,senha],(err,res)=>{
        if(err){
            callback(err)
        }else{
            callback(null)
        }
    })
}

const novoDesenvolvedor = new Desenvolvedor('Leonardo','Programador','ubsoft@email.com','acMirage','888888888')

function inserirDesenvolvedor(novoDesenvolvedor,callback){
    const query = 'INSERT INTO tb_usuarios(id_usuario, nome, cargo, email, senha, telefone) VALUES ($1,$2,$3,$4,$5,$6)'
    pool.query(query,[novoDesenvolvedor.id,novoDesenvolvedor.nome,novoDesenvolvedor.cargo,novoDesenvolvedor.email,novoDesenvolvedor.senha,novoDesenvolvedor.telefone],(err,res)=>{
        if(err){
            callback(err)

        } else{
            callback(null)
        }
    })
}

async function buscarTrabalhos(id_usuario){
    return new Promise((resolve, reject) => {
        pool.query('SELECT titulo,arquivo from tb_trabalhos WHERE id_usuario = ($1)',[id_usuario], (err, res) => {
          if (!err) {
            resolve(res.rows);
          } else {
            reject(err.message);
          }
        });
      });
}

function inserirTrabalho(novoTrabalho){
    const query = 'INSERT INTO tb_trabalhos(id_trabalho, id_usuario, titulo, arquivo) VALUES ($1,$2,$3,$4)'
    pool.query(query,[novoTrabalho.id,novoTrabalho.id_usuario,novoTrabalho.titulo,novoTrabalho.arquivo],(err,res)=>{
        if(err){
            throw err
        } else{
            console.log('Envio de dados feito')
        }
    })
}
/* async function main(){
        const dadosDesenvolvedores = await buscarDesenvolvedores();
        console.log(dadosDesenvolvedores);
}

main() */

module.exports = {buscarDesenvolvedores, inserirDesenvolvedor, logarDev, buscarTrabalhos,inserirTrabalho}