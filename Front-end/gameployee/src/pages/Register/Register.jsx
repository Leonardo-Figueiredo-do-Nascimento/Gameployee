import {Link} from 'react-router-dom'
import Footer from '../../components/Footer/index.jsx'
import Header from '../../components/Header/index.jsx'

export default function Register(){
    return(
        <>
            <Header/>
            <Link to={"/aboutUs"}>Cadastro</Link>
            <div className="container">
                <section></section>
            </div>
            
            <Footer/>
        </>
    )
}