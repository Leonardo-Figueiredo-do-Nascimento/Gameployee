import "./Login.css" 
import {Link} from 'react-router-dom'
import Header from '../../components/Header/index.jsx'
import { useState } from "react"

export default function Login(){

    const [dev,setDev] = useState(false)
    const [companie,setCompanie] = useState(false)
    
    function handleSubmit(){

    }

    return(
        <>
            <Header/>
            <h3>Faça seu login</h3>
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
                    <label>E-mail:</label>
                    <input type="email" id="email" placeholder="seuemail@example.com"/>
                    <label>Senha:</label>
                    <input type="text" id="email"/>
                    

                    <input type="submit" value="Fazer Login"/>
                </form>
            </div>
        </>
    )
}