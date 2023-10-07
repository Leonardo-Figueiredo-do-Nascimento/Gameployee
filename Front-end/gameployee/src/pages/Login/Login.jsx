import "./Login.css" 
import {Link} from 'react-router-dom'
import Footer from '../../components/Footer/index.jsx'
import Header from '../../components/Header/index.jsx'

export default function Login(){
    return(
        <>
            <Header/>
            <Link to={"/aboutUs"}>Login</Link>
            <div className="container">
                <div className='caixa'>
                    <form method="post">
                        <label for="usuario">Usuário:</label>

                        <label for="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" required/>

                        <input type="submit" value="Entrar"/>
                    </form>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}