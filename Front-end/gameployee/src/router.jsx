import {createBrowserRouter} from 'react-router-dom'
import About from './pages/About us/About'
import Companies from './pages/Companies/Companies'
import Developers from './pages/Developers/Developers'
import Home from './pages/Home/Home'

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
])

export default router