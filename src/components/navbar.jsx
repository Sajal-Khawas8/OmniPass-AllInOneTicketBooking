import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'
import { useAuth0 } from "@auth0/auth0-react";
import Error from './Error';

export default function Navbar() {
    const [navOpened, openNav] = useState(false);
    const { loginWithRedirect, logout, isAuthenticated, error } = useAuth0();
    const history = useNavigate();
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
                    <li> <Link to="/"> Home</Link></li>
                    <li> <a href="#"> About</a></li>
                    <li> <a href="#services"> Services</a></li>
                    <li> <a href="#contactUs"> Contact Us</a></li>
                    {
                        isAuthenticated ?
                            <li><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button></li>
                            :
                            <li> <button className='active' onClick={() => loginWithRedirect({ redirectUri: window.location.href, onRedirectCallback: () => {} })}> Log in</button></li>
                    }
                    {error && !isAuthenticated && <Error errMessage={"Please verify your email and Click on Log in button"}></Error>}
                </ul>
            </nav>
        </header>
    )
}
