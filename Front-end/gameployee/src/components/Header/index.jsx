import Button from '../Button'
import './header.css'

export default function Header(){
    return(
        <div className="header">
            <h1>Gameployee</h1>

            <div className="buttons">
                <Button title={'Login'}/>
                <Button title={'Inscreva-se'}/>
            </div>

        </div>
    )
}