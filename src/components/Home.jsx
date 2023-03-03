import './Home.css'

function Home() {

    return (
        <>
            <div className="home">
                <h1>booknow<span>.com</span></h1>
                <p className="slogan">Choose the route, we'll pave the way</p>
                <p>Book your tickets today without paying any extra charges!!!</p>
            </div>
            <div className="services">
                <h2>Services</h2>
                <div className="cards">
                    <div className="card">
                        <img src="./src/images/train.jpg" alt="" />
                        <p>Book your train tickets Today!</p>
                    </div>
                    <div className="card">
                        <img src="./src/images/flight.png" alt="" />
                        <p>Book your flight tickets Today!</p>
                    </div>
                    <div className="card">
                        <img src="./src/images/hotel.png" alt="" />
                        <p>Book your hotel rooms Today!</p>
                    </div>
                    <div className="card">
                        <img src="./src/images/metro.png" alt="" />
                        <p>Book your metro tickets Today!</p>
                    </div>
                    <div className="card">
                        <img src="./src/images/bus.png" alt="" />
                        <p>Book your bus tickets Today!</p>
                    </div>
                    <div className="card">
                        <img src="./src/images/movie.png" alt="" />
                        <p>Book your movies tickets Today!</p>
                    </div>
                </div>
            </div>
            <div className="contactUs">
                <h2>Contact Us</h2>
                <div className="contact">
                    <div className="form">
                        <form action="" method="post">
                            <input type="text" name="Name" id="Name" placeholder="Your Name" /><br />
                            <input type="email" name="Email" id="Email" placeholder="Your Email" /><br />
                            <textarea name="Message" id="Message" cols="30" rows="10" placeholder="Your Message"></textarea><br />
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

export default Home