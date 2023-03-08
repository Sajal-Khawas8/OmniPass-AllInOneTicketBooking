import { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'

export default function Navbar() {
    const [navOpened, openNav] = useState(false);
    return (
        <header>
            <div className="head">Booknow<span>.com</span></div>
            <div className="hamburger" onClick={() => openNav(!navOpened)}>
                <div className={navOpened ? "line line1" : "line"}></div>
                <div className={navOpened ? "line line2" : "line"}></div>
                <div className={navOpened ? "line line3" : "line"}></div>
            </div>
            <nav className={navOpened ? "nav_text active" : "nav_text"}>
                <ul>
                    <li> <Link to="/home" className="active"> Home</Link></li>
                    <li> <a href="#"> About</a></li>
                    <li> <a href="#services"> Services</a></li>
                    <li> <a href="#contactUs"> Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}
