import {Link} from 'react-router-dom'
import Header from '../../components/Header/index.jsx'
import './Register.css'
import { useState , useEffect } from 'react'


export default function Register(){

    //State visual
    const [dev,setDev] = useState(false)
    const [companie,setCompanie] = useState(false)
    //State dos dados
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [cargo,setCargo] = useState('')
    const [senha,setSenha] = useState('')
    const [telefone,setTelefone] = useState('')
    const [dados,setDados] = useState({})
    
    useEffect(() => {
        setDados(() => {
          if (dev || companie) {
            if (dev) {
              return {
                usuario: {
                    nome: nome,
                    email: email,
                    senha: senha,
                    cargo: cargo,
                    telefone: telefone
                },
              };
            } else {
              return {
                empresa: {
                    nome: nome,
                    email: email,
                    senha: senha
                },
              };
            }
          }
        });
      }, [dev, companie, email, senha,cargo,telefone]);

    const cadastrar = (e) => {
        e.preventDefault()
    

        if(dev == true && nome != '' && email != '' && senha != '' && cargo != '' && telefone != ''){

            const dadosUsuario = JSON.stringify(dados)

            console.log(dadosUsuario)

        } else if(companie && nome != '' && email != '' && senha != ''){

           
            const dadosEmpresa = JSON.stringify(dados)

            console.log(dadosEmpresa)


        }else{
            alert('Preencha os dados para se cadastrar')
            return;
        }
    }

    return(
        <>
            <Header/>
            <h3>Cadastre-se</h3>
            <div className='registro'>
                <div className='perfis'>
                    <input type="radio" id="dev" value={dev} name="perfil" onChange={() => {
                        setDev(true); setCompanie(false)
                    }} required/>
                    <label>Desenvolvedor</label>
                    <input type="radio" id="companie" value={companie} name="perfil" onChange={() => {
                        setCompanie(true); setDev(false)
                    }}/>
                    <label>Empresa</label>
                </div>
                <form onSubmit={cadastrar}>
                    <label>Nome:</label>
                    <input type='text' id='name' value={nome} onChange={(e)=> setNome(e.target.value)}></input>
                    <label>E-mail:</label>
                    <input type="email" id="email" placeholder="seuemail@example.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <label>Senha:</label>
                    <input type="text" id="password" value={senha} onChange={(e)=> setSenha(e.target.value)}/>
                    
                    {dev && !companie ? (
                        <>
                            <h id='h3Area'>Sua área de atuação: </h>
                            <div className='carreiras'>
                                <input type="radio" id="carreira1" name="carreira" value="programador" onChange={(e)=> setCargo("programador")} required/>
                                <label>Programador</label>
                        
                                <input type="radio" id="carreira2" name="carreira" value="designer" onChange={(e)=> setCargo("designer")}/>
                                <label>Designer</label>
                        
                                <input type="radio" id="carreira3" name="carreira" value="artista 3D" onChange={(e)=> setCargo("artista 3D")}/>
                                <label>Artista 3D</label>
                                
                                <input type="radio" id="carreira4" name="carreira" value="animador" onChange={(e)=> setCargo("animador")}/>
                                <label>Animador</label>
                            </div>
                            <label>Telefone:</label>
                            <input type={'text'} id='cellnumber' value={telefone} onChange={(e)=> setTelefone(e.target.value)}></input>
                        </>
                    ) : null}

                    <input type="submit" value="Finalizar Cadastro"/>
                </form>
            </div>
        </>
    )
}