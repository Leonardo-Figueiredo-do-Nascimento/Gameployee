import {Link} from 'react-router-dom'
import { useState , useEffect } from 'react'
import Header from '../../components/Header User'
import './Jobs.css'


export default function Jobs(){

    const [cargosEscolhido, setCargosEscolhido] = useState([])

    useEffect(()=>{
        console.log(cargosEscolhido)
    },[cargosEscolhido])

    const addCargo = (value) => {
        setCargosEscolhido([...cargosEscolhido, value]);
      };
    
      // 3. Função para remover um valor do array.
    const removeCargo = (value) => {
        const updatedValues = cargosEscolhido.filter((item) => item !== value);
        setCargosEscolhido(updatedValues);
    };

    return(
        <>
            <Header/>
            <h1 id='vagas-h1'>Vagas</h1>
            <div className='painel-escolhas-vagas'>
                <input className='opcoes-vagas' type="checkbox" id="carreira1" name="carreira" value="Programador" onChange={(e) => {if(e.target.checked){addCargo(e.target.value)}else{removeCargo(e.target.value)}}}/>
                <label>Programador</label>
        
                <input className='opcoes-vagas' type="checkbox" id="carreira2" name="carreira" value="Designer" onChange={(e) => {if(e.target.checked){addCargo(e.target.value)}else{removeCargo(e.target.value)}}}/>
                <label>Designer</label>
        
                <input className='opcoes-vagas' type="checkbox" id="carreira3" name="carreira" value="Artista 3D" onChange={(e) => {if(e.target.checked){addCargo(e.target.value)}else{removeCargo(e.target.value) }}}/>
                <label>Artista 3D</label>
                
                <input className='opcoes-vagas' type="checkbox" id="carreira4" name="carreira" value="Animador" onChange={(e) => {if(e.target.checked){addCargo(e.target.value)}else{removeCargo(e.target.value)} }}/>
                <label>Animador</label>
            </div>
            <div className="container-vagas">
                <section>
                    {
                        
                    }
                </section>
            </div>
            
        </>
    )
}