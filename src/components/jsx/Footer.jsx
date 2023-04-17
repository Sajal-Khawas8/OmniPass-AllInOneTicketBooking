import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPinterestSquare, FaTwitterSquare } from "react-icons/fa";
import '../css/Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import AppLogo from '../../assets/images/AppLogo.webp';


export default function Footer() {
    return (
        <footer>
            <div className="foot">
                <div className="left_box">
                    <div className="logo">
                        Omni<span>
                            {"Pass".slice(4)}
                            <img
                                src={AppLogo}
                                alt="P"
                                style={{ verticalAlign: "-3px", height: "0.8em", width: "auto" }}
                            />
                            {"Pass".slice(1)}
                        </span>
                    </div>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><HashLink to="/#services" smooth>Services</HashLink></li>
                        <li><HashLink to="/#contactUs" smooth>Contact Us</HashLink></li>
                    </ul>
                </div>
                <div className="centre_box">
                    <ul>
                        <li>&copy; Copyright 2023</li>
                        <li>All Rights Reserved</li>
                    </ul>
                </div>
                <div className="right_box">

                    <form action="#">
                        Sign up for updates
                        <div className="text">Email*<input type="email" required /><br /></div>
                        <div className="button"><input type="submit" value="Subscribe" id="button" style={{ cursor: "pointer" }} /></div>
                    </form>
                    <div className="social">
                        <a href="https://www.facebook.com/shaquib.ali.359"><FaFacebookSquare style={{ backgroundColor: "#0034b7" }} /></a>
                        <a href="https://twitter.com/Barleen_k0001?t=tt2lf53WDPzWN6RwdLjanA&s=08"><FaTwitterSquare style={{ backgroundColor: "#1c93e4" }} /></a>
                        <a href="https://www.linkedin.com/in/sajal-khawas-232929215"><FaLinkedin style={{ backgroundColor: "#0961b8" }} /></a>
                        <a href="https://instagram.com/sajal_khawas?igshid=ZDdkNTZiNTM="><FaInstagramSquare style={{ backgroundColor: "#f20175" }} /></a>
                        <a href="https://pin.it/C32sA9C"><FaPinterestSquare style={{ backgroundColor: "#c11e26" }} /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}