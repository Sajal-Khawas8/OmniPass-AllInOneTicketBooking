import { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import Button from '../../components/jsx/Button';
import Error from '../../components/jsx/Error';
import '../css/Flight.css';
import FlightCard from '../../components/jsx/FlightCard';
import { authenticated, userData } from '../../components/jsx/Navbar'


export default function Flight() {

    const [flag, setFlag] = useState(true);
    const [errorMessage, setErrMessage] = useState("");

    async function fetchFlights() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b4e77aca3bmsh5fbe41549fdebb4p153d36jsn45e127003729',
                'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
            }
        };

        fetch(`https://flight-fare-search.p.rapidapi.com/v2/flight/?from=${document.getElementById('userSourceStation').value}&to=${document.getElementById('userDestinationStation').value}&date=${document.getElementById('userDepartureDate').value}&adult=1&type=${document.getElementById('class').value}&currency=INR`, options)
            .then(response => response.json())
            .then(response => {
                const uniqueResults = response.results.filter((result, index, self) =>
                    index === self.findIndex(r => r.flight_code === result.flight_code)
                );

                // Map the unique results to flight cards
                const flightCards = uniqueResults.map(flight => (
                    <FlightCard
                        flight_code={flight.flight_code}
                        flight_name={flight.flight_name}
                        departure_date={new Date(flight.departureAirport.time).toString().slice(4, 15)}
                        departure_time={new Date(flight.departureAirport.time).toString().slice(16, 24)}
                        departure_city={flight.departureAirport.city}
                        arrival_date={new Date(flight.arrivalAirport.time).toString().slice(4, 15)}
                        arrival_time={new Date(flight.arrivalAirport.time).toString().slice(16, 24)}
                        arrival_city={flight.arrivalAirport.city}
                        duration={flight.duration.text}
                        fare={Math.round(flight.totals.total)}
                        key={flight.flight_code}
                    />
                ));
                ReactDOM.createRoot(document.getElementById('flights')).render(flightCards);
            })
            .catch(err => {
                setFlag(false);
                setErrMessage(`Couldn't fetch flight details at the moment. Please try again later.`)
            });
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

            </div>
        </>
    )
}
