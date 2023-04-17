import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../css/Navbar.css';
import { useAuth0 } from "@auth0/auth0-react";
import Error from './Error';
import Button from './Button';
import AppLogo from '../../assets/images/AppLogo.webp';

let authenticated, userData;

export default function Navbar() {
    const [navOpened, openNav] = useState(false);
    const { loginWithRedirect, logout, isAuthenticated, error, user } = useAuth0();
    authenticated = isAuthenticated;
    userData = user;
    return (
        <header>
            <div className="head">
                Omni<span>
                    <img
                        src={AppLogo}
                        alt="P"
                        style={{ verticalAlign: "-3px", height: "0.8em", width: "auto" }}
                    />
                    ass
                </span>

            </div>

            {isAuthenticated && <div className="welcomeMessage">
                <p>Welcome <br></br><span>{user.name}</span></p>
            </div>}
            <div className="hamburger" onClick={() => openNav(!navOpened)}>
                <div className={navOpened ? "line line1" : "line"}></div>
                <div className={navOpened ? "line line2" : "line"}></div>
                <div className={navOpened ? "line line3" : "line"}></div>
            </div>
            <nav className={navOpened ? "nav_text active" : "nav_text"}>
                <ul>
                    <li> <Link to="/"> Home</Link></li>
                    <li> <Link to="/about"> About</Link></li>
                    <li> <HashLink to="/#services" smooth>Services</HashLink></li>
                    <li> <HashLink to="/#contactUs" smooth>Contact Us</HashLink></li>

                    {
                        isAuthenticated ?
                            <li><Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} content="Log out" style={{ width: '110px', height: '37px' }}>
                                Log Out
                            </Button></li>
                            :
                            <li> <Button className='active' onClick={() => loginWithRedirect({ redirectUri: 'https://omnipass.vercel.app', onRedirectCallback: () => { } })} content="Log in" style={{ width: '110px', height: '45px' }}> Log in</Button></li>
                        // <li> <Button className='active' onClick={() => loginWithRedirect({ redirectUri: window.location.href})} content="Log in" style={{ width: '110px', height: '45px' }}> Log in</Button></li>
                        // <li> <Button className='active' onClick={() => loginWithRedirect()} content="Log in" style={{ width: '110px', height: '37px' }}> Log in</Button></li>
                    }
                    {error && !isAuthenticated && <Error errMessage={"Please verify your email and Click on Log in button"}></Error>}
                </ul>
            </nav>
        </header>
    )
}
export { authenticated, userData }
