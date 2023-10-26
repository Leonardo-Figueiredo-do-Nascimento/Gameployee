import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header Companie";
import './Companie.css'
import axios from 'axios'

export default function User_Companie(){

    const {companieId, companieName} = useParams()
    const [addVaga,setAddVaga] = useState(false)
    const [tituloVaga,setTItuloVaga] = useState()
    const [cargo,setCargo] = useState()
    const [descriçãoVaga,setDescriçãoVaga] = useState()
    const [vaga,setVaga] = useState()

    useEffect(() => {
            setVaga(
                {
                    titulo: tituloVaga,
                    cargo: cargo,
                    descrição: descriçãoVaga
                }
            )
        }, [ tituloVaga,cargo,descriçãoVaga]);

    const postarVaga = async (e) => {
        e.preventDefault()

        axios.post('/Postar Vaga',vaga)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.error(error))

        setAddVaga(false)
        setVaga()
    }

    return(
        <>
            <Header/>
            <h1 id="nome-empresa">{companieName}</h1>
            <div className="empresa-container">
                <p className="visible-elements">Suas Vagas:</p>
                <section className="painel-vagas">
                    {
                        
                    }
                </section>
                <button className="visible-elements" onClick={() => setAddVaga(!addVaga)}>Adicionar Vaga</button>
                {addVaga ? (
                    <>
                        <form onSubmit={postarVaga}>
                            <label>Titulo da Vaga:</label>
                            <input type={"text"} value={tituloVaga} onChange={(e)=> setTItuloVaga(e.target.value)} required/>
                            <label>Cargo</label>
                            <div className='carreiras'>
                            <input type="radio" id="carreira1" name="carreira" value="Programador" onChange={(e)=> setCargo("Programador")} required/>
                                <label>Programador</label>
                        
                                <input type="radio" id="carreira2" name="carreira" value="Designer" onChange={(e)=> setCargo("Designer")}/>
                                <label>Designer</label>
                        
                                <input type="radio" id="carreira3" name="carreira" value="Artista 3D" onChange={(e)=> setCargo("Artista 3D")}/>
                                <label>Artista 3D</label>
                                
                                <input type="radio" id="carreira4" name="carreira" value="Animador" onChange={(e)=> setCargo("Animador")}/>
                                <label>Animador</label>
                            </div>
                            <label>Descrição:</label>
                            <input id='input-descrição' type={"text"} value={descriçãoVaga} onChange={(e)=> setDescriçãoVaga(e.target.value)} required/>
                            <input type="submit" value="Postar" />
                        </form>
                    </>
                ) : null}
            </div>
            
        </>
    )
}