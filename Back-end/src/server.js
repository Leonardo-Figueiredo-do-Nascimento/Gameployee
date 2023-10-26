const Desenvolvedor = require('./Users/Devs.js');
const Empresa = require('./Users/Empresa.js');
/* const multer = require('multer');
const path = require('path'); */
const { buscarDesenvolvedores, inserirDesenvolvedor, logarDev , buscarTrabalhos, inserirTrabalho} = require('./db/UsuarioDAO.js')
const { buscarEmpresas, inserirEmpresa, buscarVagas , inserirVaga, logarEmpresa } = require('./db/EmpresaDAO.js')
const express = require('express');
const cors = require('cors')
const server = express();
const port = 3000;

server.use(cors())
server.use(express.json())

/* const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Defina o diretório onde os arquivos serão armazenados
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
  });
  
  const upload = multer({ storage }); */
  
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
        const {nome,email,senha} = data.usuario
        const usuarioLogado = new Desenvolvedor(nome,email,senha)

        console.log('Login de usuario bem sucedido')
        res.status(200).json({ message: 'Login com sucesso', usuario: usuarioLogado, id: usuarioLogado.id, nome: usuarioLogado.nome, cargo: usuarioLogado.cargo });
    }else 
    if(data.empresa){
        const {email,senha} = data.empresa

        logarEmpresa(email,senha, async (err,result)=>{
            if(err){
                console.log("Login rejeitado: " + err.message);
                res.status(400).json({ error: 'Email ou senha incorretos ou inexistentes' });
            }else{
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

/* (err)=>{
            if(err){
                console.log("Login rejeitado: " + err.message);
                res.status(400).json({ error: 'Email ou senha incorretos ou inexistentes' });           
            } else{
                console.log("Login de empresa bem sucedido")
                res.status(200).json({ message: 'Login com sucesso', empresa: empresaLogada, id: empresaLogada.id, nome: empresaLogada.nome });
            }

        } */

server.post('/Postar Vaga', (req, res) => {
    const data = req.body
    console.log('Dados recebidos no servidor:', data);
    res.send('Dados recebidos com sucesso');

});


// GET das vagas da Empresa local 
server.get('/Vagas da empresa',(req,res)=>{

})

// GET de CANDIDATOS
/* server.get('/Candidatos',(req,res)=>{
    const data = req.body
}) */

// POST DE TRABALHOS DO USUARIO
/* server.post('/Trabalho', upload.single('file'), (req, res) => {
    const data = {
      titulo: req.body.titulo,
      file: req.file, // Informações do arquivo
    };
    console.log('Dados recebidos no servidor:', data);
    res.send('Dados recebidos com sucesso');
}); */

server.listen(port,()=>{
    console.log("Servidor conectado") 
})