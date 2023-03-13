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
    let sourceStation, destinationStation;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '05a1b7e16dmsh0d31aaab7a40a47p1ea8c7jsn74665b1d1c48',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
    };

    //Source station code
    await fetch(`https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${document.getElementById("userSourceStation").value}`, options)
        .then(response => response.json())
        .then(response => {
            sourceStation = response.data[0].code;
            console.log(sourceStation);
        })
        .catch(err => console.error(err));

    //Destination station code
    await fetch(`https://irctc1.p.rapidapi.com/api/v1/searchStation?query=${document.getElementById("userDestinationStation").value}`, options)
        .then(response => response.json())
        .then(response => {
            destinationStation = response.data[0].code;
            console.log(destinationStation);
        })
        .catch(err => console.error(err));

    if (!sourceStation || !destinationStation) {
        console.error('Could not fetch station codes');
        return;
    }

    await fetch(`https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=${sourceStation}&toStationCode=${destinationStation}`, options)
        .then(response => response.json())
        .then(response => {
            const trainCards = response.data.map(train => (
                <TrainCard
                    trainNumber={train.train_number}
                    trainName={train.train_name}
                    // trainType={train.train_type}
                    // runDays={train.run_days}
                    origin={train.train_origin_station}
                    originCode={train.train_origin_station_code}
                    destination={train.train_destination_station}
                    destinationCode={train.train_destination_station_code}
                    departureTime={train.depart_time}
                    arrivalTime={train.arrival_time}
                    distance={train.distance}
                    classType={train.class_type}
                    dayOfJourney={train.day_of_journey}
                    sourceStation={document.getElementById("userSourceStation").value}
                    destinationStation={document.getElementById("userDestinationStation").value}
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
