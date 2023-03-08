import './footer.css'

export default function Footer() {
    return (
        <footer>
            <div class="foot">
                <div class="left_box">
                    <div class="logo">Booknow<span>.com</span></div>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact Us </a></li>
                    </ul>
                </div>
                <div class="centre_box">
                    <ul>
                        <li>&copy; Copyright 2023</li>
                        <li>All Rights Reserved</li>
                    </ul>
                </div>
                <div class="right_box">
                
                    <form action="#">
                    Sign up for updates
                       <div class="text">Email*<input type="email" required /><br /></div> 
                        <div class="button"><input type="submit" value="Subscribe" id="button" /></div>
                    </form>
                    <div class="social">
                        <a href="#"><span class="fab fa-facebook-f"></span></a>
                        <a href="#"><span class="fab fa-twitter"></span></a>
                        <a href="#"><span class="fab fa-linkedin"></span></a>
                        <a href="#"><span class="fab fa-instagram"></span></a>
                        <a href="#"><span class="fab fa-pinterest"></span></a>
                    </div>
                </div>
            </div>
        </footer>
        )
}