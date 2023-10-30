const Desenvolvedor = require('./Users/Devs.js');
const Empresa = require('./Users/Empresa.js');
const Vaga = require('./Users/Vagas.js');
const Trabalho = require('./Users/Trabalhos.js');
const multer = require('multer');
const { buscarCandidatos, inserirDesenvolvedor, logarDev , buscarTrabalhos, inserirTrabalho} = require('./db/UsuarioDAO.js')
const { inserirEmpresa, buscarVagas , inserirVaga, logarEmpresa, buscarVagasLocais } = require('./db/EmpresaDAO.js')
const express = require('express');
const cors = require('cors');
const server = express();
const port = 3000;

server.use(cors())
server.use(express.json())
const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,__dirname + '/uploads')
    },
    filename: function(req,file,callback){
        callback(null,file.originalname + ' - ' + Date.now())
    }
})
const uploads = multer({storage: storage});
  
server.post('/Cadastro',(req,res)=>{
    const data = req.body;
    console.log('Dados recebidos no servidor:', data); 

    if(data.usuario){
        const {nome,email,senha,cargo,telefone} = data.usuario
        const novoUsuario = new Desenvolvedor(nome,cargo,email,senha,telefone)
        
        inserirDesenvolvedor(novoUsuario,(err)=>{
            if(err){
                console.log("Erro ao enviar os dados = " + err.message)
                res.status(409).json({error: 'Usuario ou email já existentes'})
            } else{
                console.log('Novo usuario criado: ',novoUsuario)
                res.status(200).json({ message: 'Usuário criado com sucesso', usuario: novoUsuario, id: novoUsuario.id, nome: novoUsuario.nome, cargo: novoUsuario.cargo });
            }
        })
    }else if(data.empresa)
    {
        const {nome,email,senha} = data.empresa
        const novaEmpresa = new Empresa(nome,email,senha)

        inserirEmpresa(novaEmpresa, (err)=>{
            if(err){
                console.log("Erro ao enviar os dados = " + err.message);
                res.status(409).json({ error: 'Usuario ou email já existentes' });
            } else{
                console.log('DADOS ENVIADOS');
                console.log("Nova empresa criada: ", novaEmpresa);
                res.status(200).json({ message: 'Empresa criada com sucesso', empresa: novaEmpresa, id: novaEmpresa.id, nome: novaEmpresa.nome });
        
            }
        })
    } else{
        res.status(400).json({ message: 'Requisição invalida' });
    }
})

//############      Fazer método get no postgres pra conseguir nome, pois o login precisa do nome e cargo ###############
server.post('/Login',(req,res)=>{
    const data = req.body;
    
    console.log('Dados recebidos no servidor:', data);  
    
    if(data.usuario){
        const {email,senha} = data.usuario
        logarDev(email,senha, async (err,result)=>{
            if(err || result.rowCount == 0){
                console.log("Login rejeitado: " + err);
                res.status(400).json({ error: 'Email ou senha incorretos ou inexistentes' });
            }else if(result.rowCount == 1){
                const dadosUsuario = await result.rows
                console.log(dadosUsuario[0])
                console.log(dadosUsuario[0].id_usuario)
                console.log(dadosUsuario[0].nome_usuario)
                console.log("Login de empresa bem sucedido")
                res.status(200).json({ message: 'Login com sucesso', usuario: dadosUsuario[0], id: dadosUsuario[0].id_usuario, nome: dadosUsuario[0].nome, cargo: dadosUsuario[0].cargo});
            }
        })
    }else 
    if(data.empresa){
        const {email,senha} = data.empresa

        logarEmpresa(email,senha, async (err,result)=>{
            if(err || result.rowCount == 0){
                console.log("Login rejeitado: " + err);
                res.status(400).json({ error: 'Email ou senha incorretos ou inexistentes' });
            }else if(result.rowCount == 1){
                const dadosEmpresa = await result.rows
                console.log(dadosEmpresa[0])
                console.log(dadosEmpresa[0].id_empresa)
                console.log(dadosEmpresa[0].nome_empresa)
                console.log("Login de empresa bem sucedido")
                res.status(200).json({ message: 'Login com sucesso', empresa: dadosEmpresa[0], id: dadosEmpresa[0].id_empresa, nome: dadosEmpresa[0].nome_empresa });
            }
        })
    } else{
        res.status(400).json({ message: 'Requisição invalida' });
    }
})

server.post('/Postar_Vaga', (req, res) => {
    const data = req.body
    const {titulo,cargo,descrição,nome_empresa} = data.vaga
    const novaVaga = new Vaga(titulo,cargo,descrição,nome_empresa)
    console.log('Dados recebidos no servidor:', novaVaga);
    inserirVaga(novaVaga,(err)=>{
        if(err){
            console.log("Erro ao enviar os dados = " + err.message);
            res.json({ error: err.message });
        } else{
            console.log('DADOS ENVIADOS');
            console.log("Nova vaga criada: ", novaVaga);
            res.json({ message: 'Vaga criada com sucesso', vaga: novaVaga, titulo: novaVaga.titulo, descrição: novaVaga.descricao, nome_empresa: novaVaga.nome_empresa });
    
        }
    })

});

server.get('/Vagas',(req,res)=>{
    buscarVagas(async (err,result)=>{
        if(err || result.rowCount == 0){
            res.json(err)
        }else if(result.rowCount >= 1){
            const dadosVagas = await result.rows
            console.log(dadosVagas)
            console.log("Todas as vagas divulgadas")
            res.json({ message: 'Vagas enviadas', dadosVagas: dadosVagas});
        }
    })
})

// GET das vagas da Empresa local 
server.get('/Vagas_da_empresa/:nome',(req,res)=>{
    const nomeEmpresa = req.params.nome
    buscarVagasLocais(nomeEmpresa,async (err,result)=>{
        if(err || result.rowCount == 0){
            console.log('Sem vagas ainda');
        }else if(result.rowCount >= 1){
            const dadosVagas = await result.rows
            console.log(dadosVagas)
            console.log(dadosVagas.titulo)
            console.log(dadosVagas.cargo)
            console.log(dadosVagas.descrição)
            console.log("Todas as vagas divulgadas")
            res.json({ message: 'Vagas enviadas', dadosVagas: dadosVagas});
        }
    })
})

// GET de CANDIDATOS
server.get('/Candidatos',(req,res)=>{
    buscarCandidatos(async (err,result)=>{
        if(err || result.rowCount == 0){
            res.json(err)
        }else if(result.rowCount >= 1){
            const dadosUsuarios = await result.rows
            console.log(dadosUsuarios)
            console.log("Todas as vagas divulgadas")
            res.json({ message: 'Vagas enviadas', dadosUsuarios: dadosUsuarios});
        }
    })
})

// POST DE TRABALHOS DO USUARIO Verdadeiro
server.post('/Postar_Trabalho/:id', uploads.single('file'), (req, res) => {
    const idUsuario = req.params.id
    const titulo = req.body.titulo

    console.log(req.file)
    console.log(titulo)
    const novoTrabalho = new Trabalho(idUsuario,titulo)
    console.log('Dados recebidos no servidor:', novoTrabalho);
    inserirTrabalho(novoTrabalho,req.file,(err)=>{
        if(err){
            console.log("Erro ao enviar os dados = " + err.message);
            res.json({ error: err.message });
        } else{
            console.log('DADOS ENVIADOS');
            console.log("Novo trabalho postado: ", novoTrabalho);
            res.json({ message: 'Trabalho postado com sucesso', trabalho: novoTrabalho, titulo: novoTrabalho.titulo, arquivo: req.file });
        }
    })
}); 

/* server.get('/Trabalhos_usuario', upload.single('file'), (req, res) => {
    const data = {
      titulo: req.body.titulo,
      file: req.file, // Informações do arquivo
    };
    console.log('Dados recebidos no servidor:', data);
    buscarTrabalhos(async (err,result)=>{
        if(err || result.rowCount == 0){
            res.json(err)
        }else if(result.rowCount >= 1){
            const dadosTrabalhos = await result.rows
            console.log(dadosTrabalhos)
            console.log("Todos os trabalhos enviados")
            res.json({ message: 'trabalhos enviados', dadosUsuarios: dadosTrabalhos});
        }
    })
    res.json();
});  */


server.listen(port,()=>{
    console.log("Servidor conectado") 
})