// Importing modul penting
import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import Sidebar from "./Sidebar"
import { faHome, faUser, faCutlery } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    // State untuk menampilkan componen sidebar
    const [TamplikanSidebar, setTamplikanSidebar] = useState(false)
    const location = useLocation()
    // Navbar links
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faCutlery
        },
        /*
        {
            name: "Log In",
            path: "/login",
            icon: faUser
        },*/
    ]
    // Function untuk menutup sidebar
    function tutupSidebar(){
        setTamplikanSidebar(false)
    }
    // Function untuk menampilkan sidebar
    function toggleSidebar() {
        setTamplikanSidebar(!TamplikanSidebar)
    }

    return (
        // Fragment Navbar component Sidebar component
        <>
            {/* Navbar componen */}
            <div className="navbar container">
                <Link to="/" className="logo"><span>Resep</span>Nusan<span>tara</span></Link>
                <div className="nav-links">
                    {/* Mengambil value links dan membuat NavLink components pada sidebar */}
                    { links.map(link => ( <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link> )) }
                </div>
                {/* Tombol untuk menampilkan sidebar componen */}
                <div onClick={toggleSidebar} className={TamplikanSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {/* Sidebar component */}
            { TamplikanSidebar && <Sidebar close={tutupSidebar} links={links} /> }
        </>
    )
}
