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


        /* axios.post(`http://localhost:3000/Usuario/Desenvolvedor/${devId}/${devName}/${devCargo}/Trabalho`,fd)
        .then(response => {
            console.log('Resposta do Axios:', response.data);
        })
        .catch(error => {
            console.error('Erro ao fazer a solicitação:', error);
        }); */
        console.log(fd.get('file'))
        console.log(fd.get('titulo'))

        /* fetch(`http://localhost:3000/Trabalho`, {
            method: 'POST',
            // 👇 Set headers manually for single file upload
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: fd
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.error(err)); */
        setFile()
        setTitulo()
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
                    
                </div>
                <form onSubmit={postarTrabalho}>
                    <label className="dev-content">Selecione um arquivo:</label> <br/>
                    <input id='file-input' type="file"  name="file" onChange={(e)=>{setFile(e.target.files[0]); setFileSelected(true)}}/>

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