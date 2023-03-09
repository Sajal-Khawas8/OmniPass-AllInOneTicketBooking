import './TrainCard.css'

export default function TrainCard() {
    return (
        <div className="trainCard">
            <div className="sourceDestination">
                CDG &rarr; NDLS
            </div>
            <hr />
            <div className="trainDetails">
                <div className="block1">
                    <div className="number">12312</div>
                    <div className="name">Netaji Express</div>
                </div>
                <div className="block2">
                    <div className="source">
                        <div className="departuretime">18:07</div>
                        <div className="sourceCity">Chandigarh</div>
                        <div className="departureDate">09 March 2023</div>
                    </div>
                    <div className="duration">
                        04 hrs 08 mins
                        <div className="line">
                            <div className="circle"></div>
                            <hr />
                            <div className="circle"></div>
                        </div>
                    </div>
                    <div className="destination">
                        <div className="arrivaltime">22:15</div>
                        <div className="destinationCity">New Delhi</div>
                        <div className="arrivalDate">09 March 2023</div>
                    </div>
                </div>
            </div>

            <div className="seats">
                <div className="seatDetails">
                    <div className="seatCard">
                        <div className="class">Sleeper Class</div>
                        <div className="rate">Rs. 750</div>
                        <div className="seatsAvl"> AVL - 0012</div>
                        <div className="btn">
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className="seatCard">
                        <div className="class">Sleeper Class</div>
                        <div className="rate">Rs. 750</div>
                        <div className="seatsAvl"> AVL - 0012</div>
                        <div className="btn">
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className="seatCard">
                        <div className="class">Sleeper Class</div>
                        <div className="rate">Rs. 750</div>
                        <div className="seatsAvl"> AVL - 0012</div>
                        <div className="btn">
                            <button>Book Now</button>
                        </div>
                    </div>


                </div>
                <div className="quota">
                    Quota
                    <select name="quota" id="quota">
                        <option value="General">General</option>
                        <option value="SS">SS</option>
                        <option value="Ladies">Ladies</option>
                        <option value="Tatkal">Tatkal</option>
                    </select>
                </div>
            </div>
        </div>
    )
}