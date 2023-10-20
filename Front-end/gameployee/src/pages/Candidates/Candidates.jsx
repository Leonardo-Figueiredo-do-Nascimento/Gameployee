import {Link} from 'react-router-dom'
import Header from '../../components/Header Companie'
import './Candidates.css'

export default function Jobs(){
    return(
        <>
            <Header/>
            <h1 id='candidatos-h1'>Candidatos</h1>
            <div className='painel-escolhas-candidatos'>
                <input className='opcoes-candidatos' type="radio" id="carreira1" name="carreira" value="programador"/>
                <label for="contactChoice1">Programador</label>
        
                <input className='opcoes-candidatos' type="radio" id="carreira2" name="carreira" value="designer" />
                <label for="contactChoice2">Designer</label>
        
                <input className='opcoes-candidatos' type="radio" id="carreira3" name="carreira" value="artista 3D" />
                <label for="contactChoice3">Artista 3D</label>
                
                <input className='opcoes-candidatos' type="radio" id="carreira4" name="carreira" value="animador" />
                <label for="contactChoice3">Animador</label>
            </div>
            <div className="container">
                <section>
                    {}
                </section>
            </div>
            
        </>
    )
}