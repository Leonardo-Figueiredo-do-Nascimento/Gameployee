import {Link} from 'react-router-dom'
import Header from '../../components/Header User'
import './Jobs.css'

/* var url = "https://jooble.org/api/";
var key = "b0498e07-fce8-4b17-ad80-4492cdd330dd";
var params = "{ keywords: 'game'}"

//create xmlHttpRequest object
var http = new XMLHttpRequest();
//open connection. true - asynchronous, false - synchronous
http.open("GET", url + key, true);

//Send the proper header information
http.setRequestHeader("Content-type", "application/json");
	
//Callback when the state changes
http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		alert(http.responseText);
	}
}
//Send request to the server
http.send(params); 
 */
/* const apiKey = 'b0498e07-fce8-4b17-ad80-4492cdd330dd';
const url = `https://us.jooble.org/api/${apiKey}/`;
const keywords = 'java';

fetch(`${url}?keywords=${keywords}`)
  .then(response => response.json())
  .then(data => console.log(data)); */

export default function Jobs(){
    return(
        <>
            <Header/>
            <h1 id='vagas-h1'>Vagas</h1>
            <div className='painel-escolhas-vagas'>
                <input className='opcoes-vagas' type="radio" id="carreira1" name="carreira" value="programador"/>
                <label for="contactChoice1">Programador</label>
        
                <input className='opcoes-vagas' type="radio" id="carreira2" name="carreira" value="designer" />
                <label for="contactChoice2">Designer</label>
        
                <input className='opcoes-vagas' type="radio" id="carreira3" name="carreira" value="artista 3D" />
                <label for="contactChoice3">Artista 3D</label>
                
                <input className='opcoes-vagas' type="radio" id="carreira4" name="carreira" value="animador" />
                <label for="contactChoice3">Animador</label>
            </div>
            <div className="container">
                <section>
                    {}
                </section>
            </div>
            
        </>
    )
}