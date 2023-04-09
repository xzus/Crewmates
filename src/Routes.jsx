import { useRoutes } from 'react-router-dom'
import Home from './components/Home'
import Add from './components/Add';
import Gallery from './components/Gallery';
import Update from './components/Update';
import Sidebar from './components/Sidebar';
export default function Router(){
let routes = useRoutes([
    {
        path: "/",
        element: <Sidebar/>,
        children: [
            {
                path: "/home",
                element: <Home/>
            },
            {
                path: "/add",
                element: <Add/>
            },
            {
                path: "/gallery",
                element: <Gallery/>
            },
            {
                path: "/gallery/update/:id",
                element: <Update/>
            }
        ]
    },
])
return routes;
}
