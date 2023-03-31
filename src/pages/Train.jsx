import { useState } from 'react';
import * as ReactDOM from 'react-dom/client';
import Button from '../components/Button';
import Error from '../components/Error';
// import ReactDOM from 'react-dom';
import TrainCard from '../components/TrainCard';
import './Train1.css';
import { Link } from 'react-router-dom';

// userSourceStation=document.getElementById("userSourceStation").value
// userDestinationStation=document.getElementById("userDestinationStation").value
// let userDepartureDate=document.getElementById("userDepartureDate").value;
// let sourceStation, destinationStation;

// export {sourceStation, destinationStation, userDepartureDate}



// function fetchTrains(params) {
//     console.log(document.getElementById("userSourceStation").value);
// }


export default function Train() {

    const [flag, setFlag] = useState(true);
    const [searchMethod, setSearchMethod] = useState("station");
    const [errorMessage, setErrMessage] = useState("");

    async function fetchTrains() {
        let sourceStationCode, destinationStationCode, trainData = true;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '20e3324d81msh30c319765e14b90p1c79dfjsneaf38a999169',
                'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
            }
        };

        if (searchMethod === "station") {

            //Source station code
            await fetch(`https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${document.getElementById("userSourceStation").value}`, options)
                .then(response => response.json())
                .then(response => {
                    sourceStationCode = response.data[0].code;
                    // console.log(sourceStationCode);
                })
                .catch(err => {
                    setFlag(false);
                    setErrMessage("Couldn't fetch source station. Please try again later and ensure that you are searching for valid station name.")
                });
            if (!sourceStationCode) {
                return;
            }


            // wait for 1 second before making the next API request
            await new Promise((resolve) => setTimeout(resolve, 1000));

            //Destination station code
            await fetch(`https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${document.getElementById("userDestinationStation").value}`, options)
                .then(response => response.json())
                .then(response => {
                    destinationStationCode = response.data[0].code;
                    console.log(destinationStationCode);
                })
                .catch(err => {
                    setFlag(false);
                    setErrMessage("Couldn't fetch destination station. Please try again later and ensure that you are searching for valid station name.")
                });

            if (!destinationStationCode) {
                // console.error('Could not fetch destination station codes');
                return;
            }

            // wait for 1 second before making the next API request
            await new Promise((resolve) => setTimeout(resolve, 1000));

            //Train details
            await fetch(`https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=${sourceStationCode}&toStationCode=${destinationStationCode}`, options)
                .then(response => response.json())
                .then(response => {
                    const trainCards = response.data.map(train => (
                        <TrainCard
                            trainNumber={train.train_number}
                            trainName={train.train_name}
                            // trainType={train.train_type}
                            // runDays={train.run_days}
                            // origin={train.train_origin_station}
                            // originCode={train.train_origin_station_code}
                            // destination={train.train_destination_station}
                            // destinationCode={train.train_destination_station_code}
                            departureTime={train.depart_time}
                            arrivalTime={train.arrival_time}
                            distance={train.distance}
                            // classType={train.class_type}
                            dayOfJourney={train.day_of_journey}
                            userSourceStation={document.getElementById("userSourceStation").value}
                            userDestinationStation={document.getElementById("userDestinationStation").value}
                            sourceStation={sourceStationCode}
                            destinationStation={destinationStationCode}
                            departureDate={document.getElementById("userDepartureDate").value}
                            key={train.train_number}
                        />
                    ));
                    ReactDOM.createRoot(document.getElementById('trains')).render(trainCards);
                })
                .catch(err => {
                    trainData = false;
                    setFlag(false);
                    setErrMessage(`Couldn't fetch trains between ${document.getElementById("userSourceStation").value} and ${document.getElementById("userDestinationStation").value}. Please try again later.`)
                });
            if (!trainData) {
                return;
            }
        }
        else if (searchMethod === "train") {

            // {
            //     "status": true,
            //     "message": "Success",
            //     "timestamp": 1680288645137,
            //     "data": [
            //       {
            //         "train_number": "12312",
            //         "train_name": "KALKA - HOWRAH Netaji SF Express",
            //         "eng_train_name": "KALKA - HOWRAH Netaji SF Express",
            //         "new_train_number": ""
            //       }
            //     ]
            //   }

            const options2 = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'faeca5e3dfmsh04ba3f5b4887182p1f2772jsnc0b401e4b225',
                    'X-RapidAPI-Host': 'indian-railway-irctc.p.rapidapi.com'
                }
            };

            // [
            //     {
            //       "id": "2739",
            //       "display": "12312 - KALKA MAIL (KLK - HWH)",
            //       "source_name": "KALKA",
            //       "source_name_hi": "कालका",
            //       "source_code": "KLK",
            //       "destination_name": "HOWRAH JN",
            //       "destination_name_hi": "हावड़ा जं.",
            //       "destination_code": "HWH",
            //       "runson": "1111111"
            //     }
            //   ]

            await fetch(`https://indian-railway-irctc.p.rapidapi.com/getTrainId?trainno=${document.getElementById("trainSearchNumber")}`, options2)
                .then(response => response.json())
                .then(response => {
                    response.map(train => (
                        fetch(`https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=${train.source_code}&toStationCode=${train.destination_code}`, options)
                            .then(response => response.json())
                            .then(response => {
                                const trainCards = response.data.map(train => (
                                    <TrainCard
                                        trainNumber={train.train_number}
                                        trainName={train.train_name}
                                        // trainType={train.train_type}
                                        // runDays={train.run_days}
                                        // origin={train.train_origin_station}
                                        // originCode={train.train_origin_station_code}
                                        // destination={train.train_destination_station}
                                        // destinationCode={train.train_destination_station_code}
                                        departureTime={train.depart_time}
                                        arrivalTime={train.arrival_time}
                                        distance={train.distance}
                                        // classType={train.class_type}
                                        dayOfJourney={train.day_of_journey}
                                        userSourceStation={document.getElementById("userSourceStation").value}
                                        userDestinationStation={document.getElementById("userDestinationStation").value}
                                        sourceStation={sourceStationCode}
                                        destinationStation={destinationStationCode}
                                        departureDate={document.getElementById("userDepartureDate").value}
                                        key={train.train_number}
                                    />
                                ));
                                ReactDOM.createRoot(document.getElementById('trains')).render(trainCards);
                            })
                            .catch(err => {
                                trainData = false;
                                setFlag(false);
                                setErrMessage("Couldn't fetch trains at the moment. Please try again later and ensure that you are searching for valid train number.")
                            })

                    ))
                })
                .catch(err => console.error(err));


            // fetch('https://irctc1.p.rapidapi.com/api/v1/searchTrain?query=190', options)
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
            //                 key={train.train_number}
            //             />
            //         ));
            //         ReactDOM.createRoot(document.getElementById('trains')).render(trainCards);
            //     })
            //     .catch(err => {
            //         setFlag(false);
            //         setErrMessage("Couldn't fetch trains at the moment. Please try again later and ensure that you are searching for valid train number.")
            //     });
        }
    }
    return (
        <>
            {!flag && <Error errMessage={errorMessage}></Error>}
            <div className="image">
                <div className="button1">
                    <Link to='/trainLiveStatus'><Button className='active' content="Live Status" style={{ width: '140px', height: '37px', fontSize: '20px', fontWeight: '300' }}> Live Status</Button></Link>
                    <Button className='active' content="PNR Check" style={{ width: '140px', height: '37px', fontSize: '20px', fontWeight: '300' }}> PNR Check</Button>
                </div>
                <div className='head'><h1>Booknow<span>.com</span></h1></div>
                <div className="button2">
                    <Button className='active' content="BY STATION" style={{ width: '170px', height: '37px', fontWeight: '500' }} onClick={() => setSearchMethod("station")}> BY STATION</Button>
                    <Button className='active' content="BY TRAIN" style={{ width: '170px', height: '37px', fontWeight: '500' }} onClick={() => setSearchMethod("train")}> BY TRAIN</Button>
                </div>
                <div className="info">
                    {searchMethod === "station" ?
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
                            <div className="Search">
                                <Button className='active' content="Search Train" style={{ width: '180px', height: '40px', fontWeight: '550' }} onClick={fetchTrains}> Search Train</Button>
                            </div>
                        </div>
                        :
                        <div className="details">
                            <div className="trainSearchNumber">
                                Train Number
                                <form> <input type="text" id='trainSearchNumber' /></form>
                            </div>
                            <div className="DD">
                                Departure Date
                                <form><input type="date" id='userDepartureDate' /></form>
                            </div>
                            <div className="Search">
                                <Button className='active' content="Search Train" style={{ width: '180px', height: '40px', fontWeight: '550' }} onClick={fetchTrains}> Search Train</Button>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div id='trains'>

            </div>
        </>
    )
}
