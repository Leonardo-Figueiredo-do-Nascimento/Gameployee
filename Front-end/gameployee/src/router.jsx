import {createBrowserRouter} from 'react-router-dom'
import Companies from './pages/Companies/Companies'
import Developers from './pages/Developers/Developers'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Jobs from './pages/Jobs/Jobs'
import User_Dev from './pages/User-Dev/User-Dev'
import User_Companie from './pages/User-Companie/User-Companie'
import Candidates from './pages/Candidates/Candidates'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
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
        path: "/Usuario/Vagas",
        element: <Jobs/>
    },
    {
        path: "/Usuario/Desenvolvedor",
        element: <User_Dev/>
    },
    {
        path: "/Usuario/Empresa",
        element: <User_Companie/>
    },
    {
        path:"/Usuario/Candidatos",
        element: <Candidates/>
    }
])

export default router