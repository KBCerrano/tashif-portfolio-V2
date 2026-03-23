import { useState } from "react";
import "./styles/navbar.css";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="navbar">

            <div className="navbar-container">

                <div className="logo">

                    <a href = "/">
                        <h2>Tashif Khan</h2>
                    </a>

                </div>

                <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                    <a href="/">Home</a>

                    <a href="/projects">Projects</a>

                    <a href="/about">About</a>

                    <a href="/contact">Contact</a>

                </div>

                <div
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    <div></div>
                    <div></div>
                    <div></div>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;