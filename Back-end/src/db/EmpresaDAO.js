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

function inserirVaga(novaVaga,callback){
    const query = 'INSERT INTO tb_vagas_empresas(id_vaga,titulo, cargo, descrição,nome_empresa) VALUES ($1,$2,$3,$4,$5)'
    pool.query(query,[novaVaga.id,novaVaga.titulo,novaVaga.cargo,novaVaga.descricao,novaVaga.nome_empresa],(err,res)=>{
        if(err){
            callback(err)

        } else{
            callback(null)
        }
    })
}

async function buscarVagasLocais(nome_empresa,callback){
    const query = 'SELECT titulo,cargo,descrição FROM tb_vagas_empresas '+
                  'LEFT JOIN tb_empresas ON tb_vagas_empresas.nome_empresa = tb_empresas.nome_empresa '+
                  'WHERE tb_vagas_empresas.nome_empresa = $1'
    pool.query(query,[nome_empresa],callback)
}

async function buscarVagas(callback){
    const query = 'SELECT titulo,cargo,descrição,tb_vagas_empresas.nome_empresa FROM tb_vagas_empresas '+
                  'LEFT JOIN tb_empresas ON tb_vagas_empresas.nome_empresa = tb_empresas.nome_empresa '
    pool.query(query,callback)
}


module.exports = {buscarEmpresas, inserirEmpresa , buscarVagas, buscarVagasLocais , inserirVaga, logarEmpresa}