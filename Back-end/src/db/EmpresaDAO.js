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

const novaEmpresa = new Empresa('Ubisoft','ubsoft@email.com','acMirage')

function inserirEmpresa(novaEmpresa){
    const query = 'INSERT INTO tb_empresas(id_empresa,nome_empresa, email, senha) VALUES ($1,$2,$3,$4)'
    pool.query(query,[novaEmpresa.id,novaEmpresa.nome,novaEmpresa.email,novaEmpresa.senha],(err,res)=>{
        if(!err){
            console.log('Envio de dados feito')

        } else{
            console.log(err.message)
        }
    })
}


async function main(){
        const dadosEmpresas = await buscarEmpresas();
        console.log(dadosEmpresas)
}

main()

module.exports = {buscarEmpresas, inserirEmpresa}