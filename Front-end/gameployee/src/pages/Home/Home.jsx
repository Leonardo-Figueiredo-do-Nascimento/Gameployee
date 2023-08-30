import {Link} from 'react-router-dom'
import Footer from '../../components/Footer/index.jsx'
import Header from '../../components/Header/index.jsx'

export default function Home(){
    return(
        <>
            <Header/>
            <Link to={"/aboutUs"}>Sobre nos</Link>
            <div className="container">
                <section></section>
            </div>
            
            <Footer/>
        </>
    )
}