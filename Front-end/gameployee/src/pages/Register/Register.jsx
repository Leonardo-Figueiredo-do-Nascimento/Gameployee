import {Link} from 'react-router-dom'
import Header from '../../components/Header/index.jsx'

export default function Register(){
    return(
        <>
            <Header/>
            <Link to={"/aboutUs"}>Cadastro</Link>
            <div className="container">
                <section></section>
            </div>
            
        </>
    )
}