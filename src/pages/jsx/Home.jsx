import { Link } from 'react-router-dom'
import '../css/Home.css'

export default function Home() {

    return (
        <>
            <div className="home">
                <h1>Omni<span>
                    <img
                        src='../../src/images/AppLogo.webp'
                        alt="P"
                        style={{ verticalAlign: "-13px", height: "1em", width: "auto" }}
                    />
                    ass
                </span></h1>
                <p className="slogan">Choose the route, we'll pave the way</p>
                <p>Book your tickets today without paying any extra charges!!!</p>
            </div>
            <div className="services" id='services'>
                <h2>Services</h2>
                <div className="cards">
                    <div className="card">
                        <Link to="/train">
                            <img src="./src/images/train.jpg" alt="" />
                            <p>It's a freight day to go for a ride on Train. Book your train tickets Now!!! Also check your PNR & Live Status without paying any charges</p>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/flight">
                            <img src="./src/images/flight.webp" alt="" />
                            <p>All you need is a passport, plane ticket and positive vibe. So get your Flight ticket ASAP and Find the joy in the journey... Book Now!!! </p>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/hotel">
                            <img src="./src/images/hotel.png" alt="" />
                            <p>It's never too early to book a staycation. Give yourself the gift of restfull night.Book your weekend staycation Now!</p>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/metro">
                            <img src="./src/images/metro.png" alt="" />
                            <p>Infinite eyes, a million words,a potpourre of vibes- Metro can never be boring. Grab your Metro tickets Really Quick!! Book Today!</p>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/bus">
                            <img src="./src/images/bus.webp" alt="" />
                            <p>Trip Planning? Trip Avoiding? Either way, you're going to want to get this on Bus. There is something great about long Bus ride. Book your seats </p>
                        </Link>
                    </div>
                    <div className="card">
                        <Link to="/movie">
                            <img src="./src/images/movie.png" alt="" />
                            <p>Can't stop, won't stop watching movie. Experience the story, on the big screen. Get your tickets, see the flicks! BOOk NOW..</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="contactUs" id='contactUs'>
                <h2>Contact Us</h2>
                <div className="contact">
                    <div className="form">
                        <form action="mailto: help.omnipass@gmail.com" method="post">
                            <input type="text" name="Name" id="Name" placeholder="Your Name" required /><br />
                            <input type="email" name="Email" id="Email" placeholder="Your Email" required /><br />
                            <textarea name="Message" id="Message" cols="30" rows="10" placeholder="Your Message" required></textarea><br />
                            <div className="btns">
                                <input type="reset" value="Clear" id="reset" />
                                <input type="submit" value="Submit" id="submit" />
                            </div>
                        </form>
                    </div>
                    <div className="location">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54874.21157283973!2d76.73921828664781!3d30.728569399331903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed818a7d6675%3A0x91114dd7dd38bbb0!2sPGGC-11%20Chandigarh!5e0!3m2!1sen!2sin!4v1677094555279!5m2!1sen!2sin" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}