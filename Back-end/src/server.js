const Desenvolvedor = require('./Users/Devs.js');
const Empresa = require('./Users/Empresa.js');
/* const multer = require('multer');
const path = require('path'); */
const { buscarDesenvolvedores, inserirDesenvolvedor } = require('./db/UsuarioDAO.js')
const { buscarEmpresas, inserirEmpresa } = require('./db/EmpresaDAO.js')
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
        try{
            inserirDesenvolvedor(novoUsuario)
            console.log('Novo usuario criado: ',novoUsuario)
            res.status(200).json({ message: 'Usuário criado com sucesso', usuario: novoUsuario, id: novoUsuario.id, nome: novoUsuario.nome, cargo: novoUsuario.cargo });
        }catch(error){
            console.log(error)
            res.status(409).json({message: 'Usuario ou email já existentes'})
        }
        
    }else 
    if(data.empresa){
        const {nome,email,senha} = data.empresa
        const novaEmpresa = new Empresa(nome,email,senha)

        try{
            inserirEmpresa(novaEmpresa)
            console.log("Nova empresa criada: ",novaEmpresa)
            res.status(200).json({ message: 'Empresa criada com sucesso', empresa: novaEmpresa, id: novaEmpresa.id, nome: novaEmpresa.nome });
        }catch (error){
            console.log(error)
            res.status(409).json({error: 'Usuario ou email já existentes'})
        }


    } else{
        res.status(400).json({ message: 'Requisição invalida' });
    }
})

//############      Fazer método get no postgres pra conseguir nome, pois o login precisa do nome e cargo ###############
server.post('/Login',(req,res)=>{
    const data = req.body;
    
    console.log('Dados recebidos no servidor:', data);  
    
    if(data.usuario){
        const {nome,email,senha,cargo,telefone} = data.usuario
        const novoUsuario = new Desenvolvedor(nome,cargo,email,senha,telefone)
        console.log('Novo usuario criado: ',novoUsuario)
        res.status(200).json({ message: 'Login com sucesso', usuario: novoUsuario, id: novoUsuario.id, nome: novoUsuario.nome, cargo: novoUsuario.cargo });
    }else 
    if(data.empresa){
        const {nome,email,senha} = data.empresa
        const novaEmpresa = new Empresa(nome,email,senha)
        console.log("Nova empresa criada: ",novaEmpresa)
        res.status(200).json({ message: 'Login com sucesso', empresa: novaEmpresa, id: novaEmpresa.id, nome: novaEmpresa.nome });
    } else{
        res.status(400).json({ message: 'Email ou senha incorretos' });
    }
})


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