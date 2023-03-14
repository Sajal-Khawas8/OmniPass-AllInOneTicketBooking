import * as ReactDOM from 'react-dom/client';
import SeatCard from './SeatCard';
import './TrainCard.css'

// import {sourceStation, destinationStation, userDepartureDate} from '../pages/Train'


async function fetchSeats(trainNumber, sourceStation, destinationStation, departureDate) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '407e0a62fcmsh86ef1b6e94567d8p14051fjsnd50b074d4791',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
    };

    // wait for 1 second before making the next API request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    fetch(`https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability?classType=${document.getElementById("classType").value}&fromStationCode=${sourceStation}&quota=${document.getElementById("quota").value}&toStationCode=${destinationStation}&trainNo=${trainNumber}&date=${departureDate}`, options)
        .then(response => response.json())
        .then(response => {
            const seatCards = response.data.map(seat => (
                <SeatCard
                    fare={seat.data.total_fare}
                    date={seat.data.date}
                    status={seat.data.current_status}
                />
            ));
            ReactDOM.createRoot(document.getElementById('seatDetails')).render(seatCards);
        })
        .catch(err => console.error(err));
}

export default function TrainCard(props) {
    return (
        <div className="trainCard">
            <div className="sourceDestination">
                CDG &rarr; NDLS
            </div>
            <hr />
            <div className="trainDetails">
                <div className="block1">
                    <div className="number">{props.trainNumber}</div>
                    <div className="name">{props.trainName}</div>
                </div>
                <div className="block2">
                    <div className="source">
                        <div className="departuretime">{props.departureTime}</div>
                        <div className="sourceCity">{props.origin}</div>
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
                        <div className="arrivaltime">{props.arrivalTime}</div>
                        <div className="destinationCity">{props.destination}</div>
                        <div className="arrivalDate">09 March 2023</div>
                    </div>
                </div>
            </div>

            <div className="seats">
                <div className="seatDetails" id='seatDetails'>
                    {fetchSeats(props.trainNumber, props.sourceStation, props.destinationStation, props.departureDate)}
                </div>

                <div className="quota">
                    Quota
                    <select name="quota" id="quota" onChange={fetchSeats}>
                        <option value="General">General</option>
                        <option value="SS">SS</option>
                        <option value="Ladies">Ladies</option>
                        <option value="Tatkal">Tatkal</option>
                    </select>
                </div>

                <div className="classType">
                    Quota
                    <select name="classType" id="classType" onChange={fetchSeats}>
                        <option value="1A">1A</option>
                        <option value="2A">2A</option>
                        <option value="3A">3A</option>
                        <option value="CC">CC</option>
                        <option value="FC">FC</option>
                        <option value="SL">SL</option>
                        <option value="2S">2S</option>
                    </select>
                </div>
            </div>
        </div>
    )
}