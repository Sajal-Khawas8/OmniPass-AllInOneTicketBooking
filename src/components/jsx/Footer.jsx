import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaPinterestSquare, FaTwitterSquare } from "react-icons/fa"
import '../css/Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="foot">
                <div className="left_box">
                    <div className="logo">Booknow<span>.com</span></div>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contactUs">Contact Us </a></li>
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
                        <div className="button"><input type="submit" value="Subscribe" id="button" /></div>
                    </form>
                    <div className="social">
                        <a href="#"><FaFacebookSquare /></a>
                        <a href="#"><FaTwitterSquare /></a>
                        <a href="#"><FaLinkedin /></a>
                        <a href="#"><FaInstagramSquare /></a>
                        <a href="#"><FaPinterestSquare /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}