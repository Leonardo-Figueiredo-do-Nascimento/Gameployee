import {Link} from 'react-router-dom'
import "./Home.css"
import Header from '../../components/Header/index.jsx'

export default function Home(){
    return(
        <div className='container'>
            <Header/>
            <div className="content">
                <h2>Olá desenvolvedores, sejam bem vindos ao Gameployee</h2>
                <br></br>
                <p>O Gameployee é uma plataforma para programadores, animadores, designers e artistas 3d 
                procurarem vagas e se candidatarem a concursos feitos pelas empresas na plataforma para serem 
                escolhidos a posição desejada pela empresa</p>
                
            </div>
        </div>
    )
}