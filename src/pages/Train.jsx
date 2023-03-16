import * as ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import TrainCard from '../components/TrainCard';
import './Train1.css';

// userSourceStation=document.getElementById("userSourceStation").value
// userDestinationStation=document.getElementById("userDestinationStation").value
// let userDepartureDate=document.getElementById("userDepartureDate").value;
// let sourceStation, destinationStation;

// export {sourceStation, destinationStation, userDepartureDate}

async function fetchTrains() {
    let sourceStationCode, destinationStationCode;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0cf37730e5msh5b2bfcbbe7fb14dp1ee5c0jsn1569c6fd1471',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
    };

    //Source station code
    await fetch(`https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${document.getElementById("userSourceStation").value}`, options)
        .then(response => response.json())
        .then(response => {
            sourceStationCode = response.data[0].code;
            console.log(sourceStationCode);
        })
        .catch(err => console.error(err));


    // wait for 1 second before making the next API request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    //Destination station code
    await fetch(`https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${document.getElementById("userDestinationStation").value}`, options)
        .then(response => response.json())
        .then(response => {
            destinationStationCode = response.data[0].code;
            console.log(destinationStationCode);
        })
        .catch(err => console.error(err));

    if (!sourceStationCode || !destinationStationCode) {
        console.error('Could not fetch station codes');
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
        .catch(err => console.error(err));
}

// function fetchTrains(params) {
//     console.log(document.getElementById("userSourceStation").value);
// }


export default function Train() {
    return (
        <>
            <div className="image">
                <div className="button1">
                    <form>
                        <input type="submit" value="Live Status" />
                        <input type="submit" value="PNR Check" />
                    </form>
                </div>
                <h1>Booknow<span>.com</span></h1>
                <div className="button2">
                    <form>
                        <input type="submit" value="By Station" />
                        <input type="submit" value="By Train" />
                    </form>
                </div>
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
                        <div className="Search">
                            <form>
                                <input type="button" value="Search Train" onClick={fetchTrains} />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <div id='trains'>

            </div>
        </>
    )
}
