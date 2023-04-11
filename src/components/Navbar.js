import { useState } from "react"
import Sidebar from "./Sidebar"

import { faHome, faCog, faCutlery, faTrademark } from "@fortawesome/free-solid-svg-icons"

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    const links = [
        {
            name: "Home",
            path: "/",
            icon: faHome
        },
        {
            name: "About",
            path: "/about",
            icon: faTrademark
        },
        {
            name: "Recipes",
            path: "/Recipes",
            icon: faCutlery
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }

    return (
        <>
            <div className="navbar container">
                <a href="#!" className="logo">Resep<span>Nusan</span>tara</a>
                <div className="nav-links">
                    {links.map(link => (
                        <a href="#!" key={link.name}>{link.name}</a>
                    ))}
                    {/* <a href="#!">Home</a>
                    <a href="#!">About</a>
                    <a href="#!">Recipes</a>
                    <a href="#!">Settings</a> */}
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" :  "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </>
    )
}