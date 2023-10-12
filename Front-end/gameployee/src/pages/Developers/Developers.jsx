import {Link} from 'react-router-dom'
import "./Developers.css"
import Button from '../../components/Button'
import Header from '../../components/Header/index.jsx'

export default function Developers(){
    return(
        <div className='container'>
            <Header/>
            <div className="content">
                <h2>Desenvolvedores</h2>
                <br/>
                <br/>
                <p>Se cadastre hoje e tenha acesso agora mesmo a vagas disponíveis para a sua ocupação e concursos 
                feito por empresas para contratação, você deve escolher apenas uma das ocupações apresentadas, 
                sendo elas programador, artista 3d, designer ou animador.
                </p>
                <br/>
                <br/>
                <p>Feito o cadastro, você poderá exibir suas artes e trabalhos para que empresas
                desenvolvedoras possam visualizá-los e tentar entrar em contato com você.
                </p>
                <br/>
                <br/>
                <Button title={'Começe'} to="/Cadastro" style={{height: '100px'}}/>
            </div>
        </div>
    )
}