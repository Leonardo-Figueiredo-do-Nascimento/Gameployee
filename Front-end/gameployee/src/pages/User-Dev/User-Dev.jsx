import Header from "../../components/Header User";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./User.css"

export default function User_Dev(){
  
    const {devId, devName, devCargo} = useParams()
    const [fileSelected, setFileSelected] = useState(false);

    const handleFileChange = () => {
        setFileSelected(true);
    };

    const handleSubmit = () =>{
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
                <form onSubmit={handleSubmit}>
                    <label className="dev-content">Selecione um arquivo:</label> <br/>
                    <input id='file-input' type="file"  name="file" onChange={handleFileChange}/>

                    {fileSelected && (
                        <div>
                            <label>Titulo do seu trabalho:</label>
                            <input type="text" id="name" /> <br/>
                            <input type={'submit'} value='Publicar'/>
                        </div>
                    )}
                    
                </form>
            </div>
            
        </>
    )
}