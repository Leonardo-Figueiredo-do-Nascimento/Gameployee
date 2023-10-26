import {Link} from 'react-router-dom'
import {useState} from 'react'
import Header from '../../components/Header Companie'
import './Candidates.css'

export default function Jobs(){

    const [cargoEscolhido, setCargoEscolhido] = useState('')

    return(
        <>
            <Header/>
            <h1 id='candidatos-h1'>Candidatos</h1>
            <div className='painel-escolhas-candidatos'>
                <input className='opcoes-candidatos' type="radio" id="carreira1" name="carreira" value="Programador" onChange={(e) => setCargoEscolhido(e.target.value)}/>
                <label>Programador</label>
        
                <input className='opcoes-candidatos' type="radio" id="carreira2" name="carreira" value="Designer" onChange={(e) => setCargoEscolhido(e.target.value)}/>
                <label>Designer</label>
        
                <input className='opcoes-candidatos' type="radio" id="carreira3" name="carreira" value="Artista 3D" onChange={(e) => setCargoEscolhido(e.target.value)}/>
                <label>Artista 3D</label>
                
                <input className='opcoes-candidatos' type="radio" id="carreira4" name="carreira" value="Animador" onChange={(e) => setCargoEscolhido(e.target.value)}/>
                <label>Animador</label>
            </div>
            <div className="container-devs">
                <section>
                    {}
                </section>
            </div>
            
        </>
    )
}