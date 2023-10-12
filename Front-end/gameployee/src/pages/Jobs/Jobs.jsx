import {Link} from 'react-router-dom'
import Header from '../../components/Header/index.jsx'

/* var url = "https://jooble.org/api/";
var key = "b0498e07-fce8-4b17-ad80-4492cdd330dd";
var params = "{ keywords: 'game'}"

//create xmlHttpRequest object
var http = new XMLHttpRequest();
//open connection. true - asynchronous, false - synchronous
http.open("POST", url + key, true);

//Send the proper header information
http.setRequestHeader("Content-type", "application/json");
	
//Callback when the state changes
http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) {
		alert(http.responseText);
	}
}
//Send request to the server
http.send(params); */

export default function Home(){
    return(
        <>
            <Header/>
            <h1>Vagas</h1>
            <div className="container">
                <section>
                    {}
                </section>
            </div>
            
        </>
    )
}