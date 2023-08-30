
import Footer from '../../components/Footer/index.jsx'
import Header from '../../components/Header/index.jsx'

export default function About(){
    return(
        <>
            <Header/>

            <div className="container">
                <section style={{display:"flex", justifyContent:'center', fontSize: '14px'}}>Alguma coisa sobre nós</section>
            </div>
            
            <Footer/>
        </>
    )
}