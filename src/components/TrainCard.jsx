import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';
import SeatCard from './SeatCard';
import './TrainCard.css'

// import {sourceStation, destinationStation, userDepartureDate} from '../pages/Train'


// async function fetchSeats(trainNumber, sourceStation, destinationStation, departureDate) {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '20e3324d81msh30c319765e14b90p1c79dfjsneaf38a999169',
//             'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
//         }
//     };

//     // wait for 1 second before making the next API request
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     fetch(`https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability?classType=${document.getElementById("classType").value}&fromStationCode=${sourceStation}&quota=${document.getElementById("quota").value}&toStationCode=${destinationStation}&trainNo=${trainNumber}&date=${departureDate}`, options)
//         .then(response => response.json())
//         .then(response => {
//             const seatCards = response.data.map(seat => (
//                 <SeatCard
//                     fare={seat.total_fare}
//                     date={seat.date}
//                     status={seat.current_status}
//                     key={seat.date}
//                 />
//             ));
//             ReactDOM.createRoot(document.getElementById('seatDetails')).render(seatCards);
//             // console.log(response);
//         })
//         .catch(err => console.error(err));


    // console.log(document.getElementById("classType").value)
    // console.log(document.getElementById("quota").value)
    // console.log(trainNumber);
    // console.log(sourceStation);
    // console.log(destinationStation);
    // console.log(departureDate);


    // let response = {
    //     "status": true,
    //     "message": "Success",
    //     "timestamp": 1678907968732,
    //     "data": [
    //         {
    //             "total_fare": 652,
    //             "date": "25-5-2023",
    //             "current_status": "RAC  11/RAC   6."
    //         },
    //         {
    //             "total_fare": 652,
    //             "date": "26-5-2023",
    //             "current_status": "RAC  14/RAC  11."
    //         },
    //         {
    //             "total_fare": 652,
    //             "date": "27-5-2023",
    //             "current_status": "RAC   1/RAC   1."
    //         },
    //         {
    //             "total_fare": 652,
    //             "date": "28-5-2023",
    //             "current_status": "AVAILABLE-0009."
    //         },
    //         {
    //             "total_fare": 652,
    //             "date": "29-5-2023",
    //             "current_status": "AVAILABLE-0011."
    //         },
    //         {
    //             "total_fare": 652,
    //             "date": "30-5-2023",
    //             "current_status": "RAC   4/RAC   4."
    //         }
    //     ]
    // }

    // const seatCards = response.data.map(seat => (
    //     <SeatCard
    //         fare={seat.total_fare}
    //         date={seat.date}
    //         status={seat.current_status}
    //     />
    // ));
    // ReactDOM.createRoot(document.getElementById('seatDetails')).render(seatCards);
// }

export default function TrainCard(props) {
    const [flag, setFlag] = useState(true);
    
    async function fetchSeats(trainNumber, sourceStation, destinationStation, departureDate) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'bb27338656mshda7a9348ad29cffp109b05jsna821e3d95649',
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
                        fare={seat.total_fare}
                        date={seat.date}
                        status={seat.current_status}
                        key={seat.date}
                    />
                ));
                ReactDOM.createRoot(document.getElementById('seatDetails')).render(seatCards);
                // console.log(response);
            })
            .catch(err => setFlag(false));
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

                <div className="quota">
                    Quota
                    <select name="quota" id="quota" onChange={() => { fetchSeats(props.trainNumber, props.sourceStation, props.destinationStation, props.departureDate) }}>
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
    )
}