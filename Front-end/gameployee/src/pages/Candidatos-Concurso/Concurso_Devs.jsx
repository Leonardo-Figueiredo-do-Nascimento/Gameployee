import Header from "../../components/Header Companie";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from 'axios'
import "./User.css"

export default function User_Dev(){
  
    const {idConcurso,concursoName} = useParams()
    const [dados,setDados] = useState([])
    const [trabalhos,setTrabalhos] = useState([])  

    useEffect(() => {
        async function getData(){
            const response = await fetch(`http://localhost:3000/Dados_Participantes_Concurso/${idConcurso}`);
            const data = await response.json()
            console.log(data)
            console.log(data.dadosParticipantes[0])
            console.log(data.dadosParticipantes)
            setDados(data.dadosParticipantes)
        }
        getData()
    }, []);
    

    return(
        <>
            <Header/>
            <h1 id="cn-titulo-concurso">{concursoName}</h1>
            <div className="cp-dev-container">
                <p className="cp-dev-content">Candidatos:</p>
                <div className="cp-trabalhos">
                    {
                        dados.length > 0 ? (
                            dados.map((dado, index) => (
                                <div className="cp-trabalho" key={index}>
                                    <div className="cp-trabalho-renderizado" >
                                        <p id={'cp-titulo-trabalho'}>{dado.titulo}</p>
                                    </div>
                                    <div className="cp-bt_opcoesTrabalho">
                                        <a target={"_blank"} href={dado.trabalho_link} id="cp-bt_linkTrabalho">Acessar Trabalho</a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Nenhum candidato ainda.</p>
                        )
                    }
                </div>
            </div>
        </>
    )
}