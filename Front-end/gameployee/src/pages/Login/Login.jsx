import "./Login.css" 
import {Link} from 'react-router-dom'
import Header from '../../components/Header/index.jsx'
import { useState , useEffect } from "react"

export default function Login(){

    const [dev,setDev] = useState(false)
    const [companie,setCompanie] = useState(false)
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const [dados,setDados] = useState({})

    useEffect(() => {
        setDados(() => {
          if (dev || companie) {
            if (dev) {
              return {
                usuario: {
                  email: email,
                  senha: senha,
                },
              };
            } else {
              return {
                empresa: {
                  email: email,
                  senha: senha,
                },
              };
            }
          }
        });
      }, [dev, companie, email, senha]);
    
    const logar = (e) => {
        e.preventDefault();

        if ((dev || companie) && email !== '' && senha !== '') {
        
            const dadosUsuario = JSON.stringify(dados);
            console.log(dadosUsuario);
            
        } else {
            alert('Preencha os dados para se cadastrar');
        }
    }

    /* const logar = (e) =>{
        e.preventDefault()
        if(dev == true && email != '' && senha != ''){

            setDados({
                usuario:{
                    email: email,
                    senha: senha,
                }
            })

            const dadosUsuario = JSON.stringify(dados)

            console.log(dadosUsuario)

        } else if(companie && email != '' && senha != ''){

            setDados({
               empresa:{
                   email: email,
                   senha: senha
               }
            })

            const dadosUsuario = JSON.stringify(dados)

            console.log(dadosUsuario)


        }else{
            alert('Preencha os dados para se cadastrar')
            return;
        }
    } */

    return(
        <>
            <Header/>
            <h3>Faça seu login</h3>
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
                <form onSubmit={logar}>
                    <label>E-mail:</label>
                    <input type="email" placeholder="seuemail@example.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <label>Senha:</label>
                    <input type="password" value={senha} onChange={(e)=> setSenha(e.target.value)}/>
                    

                    <input type="submit" value="Fazer Login"/>
                </form>
            </div>
        </>
    )
}