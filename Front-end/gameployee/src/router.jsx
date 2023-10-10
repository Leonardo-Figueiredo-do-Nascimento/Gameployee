import {createBrowserRouter} from 'react-router-dom'
import About from './pages/About us/About'
import Companies from './pages/Companies/Companies'
import Developers from './pages/Developers/Developers'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Jobs from './pages/Jobs/Jobs'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/Sobre-Nós",
        element: <About/>
    },
    {
        path: "/Empresas",
        element: <Companies/>
    },
    {
        path: "/Desenvolvedores",
        element: <Developers/>
    },
    {
        path: "/Login",
        element: <Login/>
    },
    {
        path: "/Cadastro",
        element: <Register/>
    },
    {
        path: "/Vagas",
        element: <Jobs/>
    }
])

export default router