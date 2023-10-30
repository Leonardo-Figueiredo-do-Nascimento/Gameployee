import Header from "../../components/Header User";
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import axios from 'axios'
import "./User.css"
import img from './images/file-icon.svg'

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


    useEffect(()=>{
        async function getData(){
            const response = await fetch(`http://localhost:3000/Trabalhos_usuario/${devId}`);
            const data = await response.json()
            console.log(data);
            console.log(data.dadosTrabalhos);
            setTrabalhos(data.dadosTrabalhos); 
        }
        getData()
    },[])

    const excluirTrabalho = async (e) =>{
        e.preventDefault()
    }

    const postarTrabalho = async (e) =>{

        e.preventDefault()

        if(!file){
            return;
        }
        const fd = new FormData()
        fd.append('file',file)
        fd.append('titulo',titulo)

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
        /* setFile()
        setTitulo() */
        setFileSelected(false)
    }

    const downloadFile = async (titulo) => {
        try {
            const response = await fetch(`http://localhost:3000/download/${titulo}`);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = titulo;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Erro ao baixar o arquivo:', error);
        }
    };
    

    return(
        <>
            <Header/>
            <h1 id="nome-usuario">{devName}</h1>
            <h2 id="cargo">Ocupação: {devCargo}</h2>
            <div className="dev-container">
                <p className="dev-content">Seus Trabalhos:</p>
                <div className="trabalhos">
                    {
                        trabalhos.length > 0 ? (
                            trabalhos.map((trabalho, index) => (
                                <div className="trabalho">
                                    <div className="trabalho-renderizado" key={index}>
                                        <a href={`http://localhost:3000/download/${trabalho.titulo}`} download={trabalho.titulo} id={'id-imagem'}>
                                            <img src={img} />
                                        </a>
                                        <button onClick={() => downloadFile(trabalho.titulo)}>Baixar</button>
                                        <p id={'titulo-trabalho'}>{trabalho.titulo}</p>
                                    </div>
                                    <button id="botão-exclusão" onClick={excluirTrabalho}>Excluir</button>
                                </div>
                            ))
                        ) : (
                            <p>Nenhum trabalho postado ainda.</p>
                        )
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