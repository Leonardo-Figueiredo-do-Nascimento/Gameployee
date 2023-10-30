import Header from "../../components/Header User";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from 'axios'
import "./User.css"

export default function User_Dev(){
  
    const {devId, devName, devCargo} = useParams()
    const [fileSelected, setFileSelected] = useState(false);
    const [file,setFile] = useState()
    const [titulo,setTitulo] = useState()
    const [trabalho,setTrabalho] = useState()  
    const [trabalhos,setTrabalhos] = useState([])  

    useEffect(() => {
        setTrabalho(
            {
                arquivo: file,
                titulo: titulo
            }
        )}, [ file,titulo]);

    const postarTrabalho = async (e) =>{

        e.preventDefault()

        if(!file){
            return;
        }
        const fd = new FormData()
        fd.append('file',file)
        fd.append('titulo',titulo)


        /* axios.post(`http://localhost:3000/Postar_Trabalho/${devId}`,fd)
        .then(response => {
            console.log('Resposta do Axios:', response.data);
        })
        .catch(error => {
            console.error('Erro ao fazer a solicitação:', error);
        }); */
        console.log(fd.get('file'))
        console.log(fd.get('titulo'))

        await fetch(`http://localhost:3000/Postar_Trabalho/${devId}`,{
            method: 'POST',
            body: fd
        })
        .then((res) => {
            console.log(res)
            console.log(res.message)
            console.log(res.arquivo)
        })
        .catch((err) => console.error(err));
        //setTrabalhos(fd)
        /* setFile()
        setTitulo() */
        setFileSelected(false)
    }

    return(
        <>
            <Header/>
            <h1 id="nome-usuario">{devName}</h1>
            <h2 id="cargo">Ocupação: {devCargo}</h2>

            <div className="dev-container">
                <p className="dev-content">Seus Trabalhos:</p>
                <div className="trabalhos">
                    {
                        /* trabalhos.map((trabalho,index) =>{
                            return(
                            <div key={index}>
                                <a download>{trabalho.file}</a>
                                <p>{trabalho.titulo}</p>
                            </div>)
                        }) */
                    }
                </div>
                <form onSubmit={postarTrabalho}>
                    <label className="dev-content">Selecione um arquivo:</label> <br/>
                    <input id='file-input' type="file" name="file" required onChange={(e)=>{setFile(e.target.files[0]); setFileSelected(true)}}/>

                    {fileSelected && (
                        <div>
                            <label>Titulo do seu trabalho:</label>
                            <input type="text" id="name" onChange={(e) => setTitulo(e.target.value)}/> <br/>
                            <input type={'submit'} value='Publicar'/>
                        </div>
                    )}
                    
                </form>
            </div>
            
        </>
    )
}