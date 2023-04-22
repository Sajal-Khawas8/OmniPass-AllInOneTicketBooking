import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';
import SeatCard from './SeatCard';
import '../css/TrainCard.css';
import Error from './Error';

export default function TrainCard(props) {
    const [flag, setFlag] = useState(true);

    async function fetchSeats(trainNumber, sourceStation, destinationStation, departureDate) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '300a1a8tw9msh4b15ef5e2e5e86dp17eb52jsn74638ab4c79a',
                'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
            }
        };

        // let sampleResponse = {
        //     "status": true,
        //     "message": "Success",
        //     "timestamp": 1681229209578,
        //     "data": [
        //         {
        //             "total_fare": 715,
        //             "date": "4-7-2023",
        //             "current_status": "AVAILABLE-0059."
        //         },
        //         {
        //             "total_fare": 715,
        //             "date": "5-7-2023",
        //             "current_status": "AVAILABLE-0064."
        //         },
        //         {
        //             "total_fare": 715,
        //             "date": "6-7-2023",
        //             "current_status": "AVAILABLE-0064."
        //         },
        //         {
        //             "total_fare": 715,
        //             "date": "7-7-2023",
        //             "current_status": "AVAILABLE-0064."
        //         },
        //         {
        //             "total_fare": 715,
        //             "date": "8-7-2023",
        //             "current_status": "AVAILABLE-0053."
        //         },
        //         {
        //             "total_fare": 715,
        //             "date": "9-7-2023",
        //             "current_status": "AVAILABLE-0053."
        //         }
        //     ]
        // }

        // wait for 1 second before making the next API request
        await new Promise((resolve) => setTimeout(resolve, 1000));
        fetch(`https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability?classType=${document.getElementById("classType").value}&fromStationCode=${sourceStation}&quota=${document.getElementById("quota").value}&toStationCode=${destinationStation}&trainNo=${trainNumber}&date=${departureDate}`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                const seatCards = response.data.map(seat => (
                    <SeatCard
                        fare={seat.total_fare}
                        date={seat.date}
                        status={seat.current_status}
                        trainName={props.trainName}
                        trainNumber={props.trainNumber}
                        key={seat.date}
                    />
                ));
                ReactDOM.createRoot(document.getElementById('seatDetails')).render(seatCards);
            })
            .catch(err => {
                console.log(err);
                setFlag(false)
            });
    }

    useEffect(() => {
        fetchSeats(props.trainNumber, props.sourceStation, props.destinationStation, props.departureDate);
    }, [props.trainNumber, props.sourceStation, props.destinationStation, props.departureDate]
    );


    return (
        <div className="trainCard">
            {!flag && <Error errMessage="Couldn't fetch seat details at the moment. Please try again later."></Error>}
            <div className="sourceDestination">
                {props.sourceStation} &rarr; {props.destinationStation}
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
                        <div className="sourceCity">{props.userSourceStation}</div>
                        <div className="departureDate">{props.formattedDepartureDate}</div>
                    </div>
                    <div className="duration">
                        {props.distance} kms &nbsp; &nbsp; &nbsp; {props.duration}
                        <div className="line">
                            <div className="circle"></div>
                            <hr />
                            <div className="circle"></div>
                        </div>
                    </div>
                    <div className="destination">
                        <div className="arrivaltime">{props.arrivalTime}</div>
                        <div className="destinationCity">{props.userDestinationStation}</div>
                        <div className="arrivalDate">{props.formattedArrivalDate}</div>
                    </div>
                </div>
            </div>

            <div className="seats">
                {/* {fetchSeats(props.trainNumber, props.sourceStation, props.destinationStation, props.departureDate)} */}
                <div className="seatDetails" id='seatDetails'>

                </div>
                <div className='quotaClass'>
                    <div className="quota">
                        Quota
                        <select name="quota" id="quota" onChange={() => {
                            fetchSeats(props.trainNumber, props.sourceStation, props.destinationStation, props.departureDate)
                        }}>
                            <option value="GN">General</option>
                            <option value="TQ">Tatkal</option>
                            <option value="PT">Premium Tatkal</option>
                            <option value="LD">Ladies</option>
                            <option value="SS">Lower Berth</option>
                            <option value="HP">Physically Handicapped</option>
                            <option value="HO">Headquarters/High Official</option>
                            <option value="PH">Parliament House</option>
                            <option value="DF">Defence</option>
                            <option value="FT">Foreign Tourist</option>
                            <option value="DP">Duty Pass</option>
                            <option value="YU">Yuva</option>
                        </select>
                    </div>

                    <div className="classType">
                        Class
                        <select name="classType" id="classType" onChange={() => { fetchSeats(props.trainNumber, props.sourceStation, props.destinationStation, props.departureDate) }}>
                            <option value="SL">SL</option>
                            <option value="1A">1A</option>
                            <option value="2A">2A</option>
                            <option value="3A">3A</option>
                            <option value="CC">CC</option>
                            <option value="FC">FC</option>
                            <option value="2S">2S</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}