import { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import Button from '../../components/jsx/Button';
import Error from '../../components/jsx/Error';
import TrainCard from '../../components/jsx/TrainCard';
import '../css/Flight.css';
import { Link } from 'react-router-dom';
import FlightCard from '../../components/jsx/FlightCard';

export default function Flight() {

    const [flag, setFlag] = useState(true);
    const [errorMessage, setErrMessage] = useState("");

    async function fetchFlights() {
        let sourceStationCode, destinationStationCode, trainData = true;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'faeca5e3dfmsh04ba3f5b4887182p1f2772jsnc0b401e4b225',
                'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
            }
        };



        //Train details
        // await fetch(`https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=${sourceStationCode}&toStationCode=${destinationStationCode}`, options)
        //     .then(response => response.json())
        //     .then(response => {
        //         const trainCards = response.data.map(train => (
        //             <TrainCard
        //                 trainNumber={train.train_number}
        //                 trainName={train.train_name}
        //                 // trainType={train.train_type}
        //                 // runDays={train.run_days}
        //                 // origin={train.train_origin_station}
        //                 // originCode={train.train_origin_station_code}
        //                 // destination={train.train_destination_station}
        //                 // destinationCode={train.train_destination_station_code}
        //                 departureTime={train.depart_time}
        //                 arrivalTime={train.arrival_time}
        //                 distance={train.distance}
        //                 // classType={train.class_type}
        //                 dayOfJourney={train.day_of_journey}
        //                 userSourceStation={document.getElementById("userSourceStation").value}
        //                 userDestinationStation={document.getElementById("userDestinationStation").value}
        //                 sourceStation={sourceStationCode}
        //                 destinationStation={destinationStationCode}
        //                 departureDate={document.getElementById("userDepartureDate").value}
        //                 duration={`${(Math.floor(((train.day_of_journey * 24 * 60 * 60 * 1000) + ((new Date(`2000-01-01T${train.arrival_time}`) - new Date(`2000-01-01T${train.depart_time}`)) + 24 * 60 * 60 * 1000)) / (60 * 60 * 1000))).toString().padStart(2, '0')}h 
        //                                                 ${(Math.floor((((train.day_of_journey * 24 * 60 * 60 * 1000) + ((new Date(`2000-01-01T${train.arrival_time}`) - new Date(`2000-01-01T${train.depart_time}`)) + 24 * 60 * 60 * 1000)) / (60 * 1000)) % 60)).toString().padStart(2, '0')}m 
        //                                                 ${(Math.floor((((train.day_of_journey * 24 * 60 * 60 * 1000) + ((new Date(`2000-01-01T${train.arrival_time}`) - new Date(`2000-01-01T${train.depart_time}`)) + 24 * 60 * 60 * 1000)) / 1000) % 60)).toString().padStart(2, '0')}s`}
        //                 formattedArrivalDate={new Date((new Date(document.getElementById("userDepartureDate").value + `T${train.depart_time}+05:30`)).getTime() + ((train.day_of_journey * 24 * 60 * 60 * 1000) + ((new Date(`2000-01-01T${train.arrival_time}`) - new Date(`2000-01-01T${train.depart_time}`)) + 24 * 60 * 60 * 1000))).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        //                 formattedDepartureDate={new Date(document.getElementById("userDepartureDate").value).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        //                 key={train.train_number}
        //             />
        //         ));
        //         ReactDOM.createRoot(document.getElementById('trains')).render(trainCards);
        //     })
        //     .catch(err => {
        //         trainData = false;
        //         setFlag(false);
        //         setErrMessage(`Couldn't fetch trains between ${document.getElementById("userSourceStation").value} and ${document.getElementById("userDestinationStation").value}. Please try again later.`)
        //     });
        // if (!trainData) {
        //     return;
        // }

    }
    return (
        <>
            {!flag && <Error errMessage={errorMessage}></Error>}
            <div className="image">
                <div className='head'><h1>Omni<span>
                    <img
                        src='../../src/images/AppLogo.webp'
                        alt="P"
                        style={{ verticalAlign: "-13px", height: "1em", width: "auto" }}
                    />
                    ass
                </span></h1></div>
                <div className="info">
                    <div className="details">
                        <div className="From">
                            From
                            <form> <input type="text" id='userSourceStation' /></form>
                        </div>
                        <div className="To">
                            To
                            <form><input type="text" id='userDestinationStation' /></form>
                        </div>
                        <div className="DD">
                            Departure Date
                            <form><input type="date" id='userDepartureDate' /></form>
                        </div>
                        <div className="DD">
                            Class
                            <select name="class" className="class" id="class" onChange={fetchFlights}>
                                <option value="Economy">Economy</option>
                                <option value="Business">Business</option>
                                <option value="First">First</option>
                            </select>
                        </div>
                        <div className="Search">
                            <Button className='active' content="Search Flights" style={{ width: '180px', height: '40px', fontWeight: '550' }} onClick={fetchFlights}> Search Train</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='flights'>
                <FlightCard 
                    flight_code="UK-638" 
                    flight_name="Vistara" 
                    stops="Direct" 
                    departure_date="May 02 2023"
                    departure_time="18:50:00"
                    departure_city="Chandigarh"
                    arrival_date="May 02 2023"
                    arrival_time="18:50:00"
                    arrival_city="New Delhi"
                    duration="01h 00m"
                />
            </div>
        </>
    )
}
