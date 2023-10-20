import {Link} from 'react-router-dom'
import Header from '../../components/Header/index.jsx'
import './Register.css'
import { useState } from 'react'


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

    const escolherCargo = (event) => {
        setCargo(event.target.value);
    };

    function cadastrar(){
        if(dev = true && nome !='' && email !='' && senha !='' && cargo !='' && telefone !=''){
            setDados({
                usuario:{
                    nome: nome,
                    email: email,
                    senha: senha,
                    cargo: cargo,
                    telefone: telefone
                }
            })
        } else if(companie = true && nome !='' && email !='' && senha !=''){
            setDados({
                empresa:{
                    nome: nome,
                    email: email,
                    senha: senha
                }
            })
        }else{
            alert('preencha os dados para se cadastrar')
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
                    <label for="dev">Desenvolvedor</label>
                    <input type="radio" id="companie" value={companie} name="perfil" onChange={() => {
                        setCompanie(true); setDev(false)
                    }}/>
                    <label for="companie">Empresa</label>
                </div>
                <form onSubmit={cadastrar()}>
                    <label>Nome:</label>
                    <input type='text' id='name' value={nome} onChange={(e)=> setNome(e.target.value)}></input>
                    <label>E-mail:</label>
                    <input type="email" id="email" placeholder="seuemail@example.com" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <label>Senha:</label>
                    <input type="text" id="email" value={senha} onChange={(e)=> setSenha(e.target.value)}/>
                    
                    {dev && !companie ? (
                        <>
                            <h3>Sua área de atuação: </h3>
                            <div className='carreiras'>
                                <input type="radio" id="carreira1" name="carreira" value="programador" onChange={escolherCargo()} required/>
                                <label for="contactChoice1">Programador</label>
                        
                                <input type="radio" id="carreira2" name="carreira" value="designer" onChange={escolherCargo()}/>
                                <label for="contactChoice2">Designer</label>
                        
                                <input type="radio" id="carreira3" name="carreira" value="artista 3D" onChange={escolherCargo()}/>
                                <label for="contactChoice3">Artista 3D</label>
                                
                                <input type="radio" id="carreira4" name="carreira" value="animador" onChange={escolherCargo()}/>
                                <label for="contactChoice3">Animador</label>
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