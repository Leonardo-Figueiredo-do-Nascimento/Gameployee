import { useState } from "react";
import Header from "../../components/Header Companie";
import './Companie.css'

export default function User_Companie(){

    const [addVaga,setAddVaga] = useState(false)
    const [data,setData] = useState()

    function postarVaga(){
        
    }

    return(
        <>
            <Header/>
            <h1 id="nome-empresa">USER Companie</h1>
            <div className="empresa-container">
                <p className="visible-elements">Suas Vagas:</p>
                <section className="painel-vagas">

                </section>
                <button className="visible-elements" onClick={() => setAddVaga(!addVaga)}>Adicionar Vaga</button>
                {addVaga ? (
                    <>
                        <form onSubmit={postarVaga()}>
                            <label>Titulo da Vaga:</label>
                            <input type={"text"}/>
                            <label>Cargo</label>
                            <div className='carreiras'>
                                <input type="radio" id="carreira1" name="carreira" value="programador" required/>
                                <label for="contactChoice1">Programador</label>
                        
                                <input type="radio" id="carreira2" name="carreira" value="designer" />
                                <label for="contactChoice2">Designer</label>
                        
                                <input type="radio" id="carreira3" name="carreira" value="artista 3D" />
                                <label for="contactChoice3">Artista 3D</label>
                                
                                <input type="radio" id="carreira4" name="carreira" value="animador" />
                                <label for="contactChoice3">Animador</label>
                            </div>
                            <label>Descrição:</label>
                            <input id='input-descrição' type={"text"}/>
                            <input type="submit" value="Postar" />
                        </form>
                    </>
                ) : null}
            </div>
            
        </>
    )
}