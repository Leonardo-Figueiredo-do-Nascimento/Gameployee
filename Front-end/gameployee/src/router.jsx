import {createBrowserRouter} from 'react-router-dom'
import About from './pages/About us/About'
import Home from './pages/Home/Home'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/aboutUs",
        element: <About/>
    }
])

export default router