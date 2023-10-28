import {Link} from 'react-router-dom'
import { useState , useEffect } from 'react'
import Header from '../../components/Header User'
import './Jobs.css'


export default function Jobs(){

    const [cargosEscolhidos, setCargosEscolhidos] = useState([])
    const [vagas,setVagas] = useState([]) 

    useEffect(()=>{
        async function getData(){
            const response = await fetch(`http://localhost:3000/Vagas`)
            const data = await response.json() 
            setVagas(data.dadosVagas)       
        };
        getData()
        console.log(cargosEscolhidos)
    },[cargosEscolhidos])

    const addCargo = (value) => {
        setCargosEscolhidos([...cargosEscolhidos, value]);
      };
    
      // 3. Função para remover um valor do array.
    const removeCargo = (value) => {
        const updatedValues = cargosEscolhidos.filter((item) => item !== value);
        setCargosEscolhidos(updatedValues);
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
            <section className="container-vagas">
                    {
                        vagas.map((vaga,index)=>{
                            if(cargosEscolhidos.includes(vaga.cargo)){
                                return (
                                <div className="vagas-renderizadas" key={index}>
                                    <p id="p3-titulo-vaga">{vaga.titulo}</p>
                                    <p id="p2-cargo-vaga">{vaga.cargo}</p>
                                    <p id="p1-descricao-vaga">{vaga.descrição}</p>
                                </div>)
                            }
                        })
                    }
            </section>
        </>
    )
}