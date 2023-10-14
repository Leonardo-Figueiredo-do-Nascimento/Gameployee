import {Link} from 'react-router-dom'
import Header from '../../components/Header/index.jsx'
import './Register.css'
import { useState } from 'react'


export default function Register(){

    const [dev,setDev] = useState(false)
    const [companie,setCompanie] = useState(false)
    
    function handleSubmit(){

    }

    return(
        <>
            <Header/>
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
                <form onSubmit={handleSubmit()}>
                    <label>Nome:</label>
                    <input type='text' id='name'></input>
                    <label>E-mail:</label>
                    <input type="email" id="email" placeholder="seuemail@example.com"/>
                    <label>Senha:</label>
                    <input type="text" id="email"/>
                    
                    {dev && !companie ? (
                        <>
                            <h3>Sua área de atuação: </h3>
                            <div className='carreiras'>
                                <input type="radio" id="carreira1" name="carreira" value="programador" required/>
                                <label for="contactChoice1">Programador</label>
                        
                                <input type="radio" id="carreira2" name="carreira" value="designer" />
                                <label for="contactChoice2">Designer</label>
                        
                                <input type="radio" id="carreira3" name="carreira" value="artista 3D" />
                                <label for="contactChoice3">Artista 3D</label>
                                
                                <input type="radio" id="carreira4" name="carreira" value="animador" />
                                <label for="contactChoice3">Animador</label>
                            </div>
                            <label>Telefone:</label>
                            <input type={'text'} id='cellnumber'></input>
                        </>
                    ) : null}

                    <input type="submit" value="Finalizar Cadastro"/>
                </form>
            </div>
        </>
    )
}