const {criarPool} = require('./Conn')

const pool = criarPool()

async function buscarCandidatos(callback){
    const query = 'SELECT id_usuario,nome,cargo,email,telefone FROM tb_usuarios'
    pool.query(query,callback)
}

async function buscarDadosCandidato(id_usuario,callback){
    const query = 'SELECT nome,cargo,email,telefone FROM tb_usuarios WHERE id_usuario = $1'
    pool.query(query,[id_usuario],callback)
}

async function logarDev(email,senha, callback){
    const query = 'SELECT * FROM tb_usuarios WHERE email = $1 AND senha = $2'
    pool.query(query,[email,senha],callback)
}

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

async function buscarTrabalhos(id_usuario,callback){
    const query = 'SELECT tb_usuarios.telefone,id_trabalho,titulo,trabalho_link FROM tb_trabalhos '+
                  'LEFT JOIN tb_usuarios ON tb_trabalhos.id_usuario = tb_usuarios.id_usuario '+
                  'WHERE tb_trabalhos.id_usuario = $1'

    pool.query(query,[id_usuario],callback)
}

function deletarTrabalho(id_trabalho,callback){
    const query = 'DELETE FROM tb_trabalhos WHERE id_trabalho = $1'
    pool.query(query,[id_trabalho],(err,res)=>{
        if(err){
            callback(err)

        } else{
            callback(null)
        }
    })
}

function inserirTrabalho(novoTrabalho,callback){
    const query = 'INSERT INTO tb_trabalhos(id_trabalho, id_usuario, titulo, trabalho_link) VALUES ($1,$2,$3,$4)'
    pool.query(query,[novoTrabalho.id,novoTrabalho.id_usuario,novoTrabalho.titulo,novoTrabalho.trabalho_link],(err,res)=>{
        if(err){
            callback(err)

        } else{
            callback(null)
        }
    })
}

function buscarTelefone(id_usuario,callback){
    const query = 'SELECT telefone FROM tb_usuarios WHERE id_usuario = $1'

    pool.query(query,[id_usuario],callback)
}

function mudarTelefone(id_usuario,novoTelefone,callback){
    const query = 'UPDATE tb_usuarios '+
                  'SET telefone = $1 '+
                  'WHERE id_usuario = $2'

    pool.query(query,[novoTelefone,id_usuario],callback)
}


module.exports = {buscarCandidatos, buscarDadosCandidato,mudarTelefone,buscarTelefone,inserirDesenvolvedor, logarDev, buscarTrabalhos,inserirTrabalho,deletarTrabalho}