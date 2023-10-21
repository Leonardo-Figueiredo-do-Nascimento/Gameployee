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
                <label>Programador</label>
        
                <input className='opcoes-candidatos' type="radio" id="carreira2" name="carreira" value="designer" />
                <label>Designer</label>
        
                <input className='opcoes-candidatos' type="radio" id="carreira3" name="carreira" value="artista 3D" />
                <label>Artista 3D</label>
                
                <input className='opcoes-candidatos' type="radio" id="carreira4" name="carreira" value="animador" />
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