import {createBrowserRouter} from "react-router-dom"
import App from "../App"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <PaginaInicial />
            },
            {
                path: "/cadastro-trilha",
                element: <PaginaCadastroTrilha />
            },
            {
                path: "/lista-trilhas",
                element: <PaginaListaTrilhas />
            }
        ]
    }
    
])

export default routes