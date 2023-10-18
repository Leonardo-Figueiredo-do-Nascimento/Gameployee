import Header from "../../components/Header User";
import { useState } from "react";
import "./User.css"

export default function User_Dev(){
  
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
            <h1 id="nome-usuario">USER NAME</h1>
            <h2 id="cargo">Ocupação: Cargo</h2>

            <div className="dev-container">
                <p className="dev-content">Seus Trabalhos:</p>
                <div className="trabalhos">
                    
                </div>
                <form onSubmit={handleSubmit}>
                    <label className="dev-content" for="imagem">Selecione um arquivo:</label> <br/>
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