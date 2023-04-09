import {Link, Outlet} from "react-router-dom"
import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="home">
            <div className = "nav">
                <Link to={"/home"}>Home</Link>
                <Link to={"/add"}>Add Crewmate</Link>
                <Link to={"/gallery"}>Crew Gallery</Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default Sidebar;