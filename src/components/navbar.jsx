import React from "react";
import "../styles/navbar.css";

function Navbar(){
    return(
        <nav className="navbar-container">
            <div className="navbar-logo">
                <span>Logo</span>
            </div>
            <div className="navbar-links">
                <a href="#nosotros">Nosotros</a>
                <a href="#soluciones">Soluciones</a>
                <a href="#contacto">Contacto</a>
            </div>
            <div className="navbar-contact">
                <button className="contact-btn">Contacto</button>
            </div>
        </nav>
    )
}

export default Navbar;