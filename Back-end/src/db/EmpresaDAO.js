const {criarPool} = require('./Conn')
const Empresa = require('../Users/Empresa.js');

const pool = criarPool()

async function buscarEmpresas(){
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from tb_empresas', (err, res) => {
          if (!err) {
            resolve(res.rows);
          } else {
            reject(err.message);
          }
        });
      });
}

async function logarEmpresa(email,senha, callback){
    const query = 'SELECT * FROM tb_empresas WHERE email = $1 AND senha = $2'
    pool.query(query,[email,senha],callback)
}


const novaEmpresa = new Empresa('Ubisoft','ubsoft@email.com','acMirage')

function inserirEmpresa(novaEmpresa, callback){
    const query = 'INSERT INTO tb_empresas(id_empresa,nome_empresa, email, senha) VALUES ($1,$2,$3,$4)'
    pool.query(query,[novaEmpresa.id,novaEmpresa.nome,novaEmpresa.email,novaEmpresa.senha],(err,res)=>{
        if(err){
            callback(err)

        } else{
            callback(null)
        }
    })
}

function inserirVaga(novaVaga){
    const query = 'INSERT INTO tb_vagas_empresas(id_vaga,titulo, cargo, descrição,nome_empresa) VALUES ($1,$2,$3,$4,$5)'
    pool.query(query,[novaVaga.id,novaVaga.nome,novaVaga.email,novaVaga.senha],(err,res)=>{
        if(!err){
            console.log('Envio de dados feito')

        } else{
            console.log(err.message)
        }
    })
}

async function buscarVagas(){
    return new Promise((resolve, reject) => {
        pool.query('SELECT * from tb_vagas', (err, res) => {
          if (!err) {
            resolve(res.rows);
          } else {
            reject(err.message);
          }
        });
      });
}


module.exports = {buscarEmpresas, inserirEmpresa , buscarVagas , inserirVaga, logarEmpresa}