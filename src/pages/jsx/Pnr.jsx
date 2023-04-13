import React, { useState, useEffect } from 'react'
import '../css/Pnr.css'
import Button from '../../components/jsx/Button';
import Error from '../../components/jsx/Error';

export default function Pnr() {
  const [showPnrStatus, setShowPnrStatus] = useState(false);
  const [data, setData] = useState(null);
  const [pnrNumber, setPnrNumber] = useState(null);
  const [error, setError]=useState(false);

  // let response = {
  //   "status": true,
  //   "message": "Success",
  //   "timestamp": 1681234050223,
  //   "data": {
  //     "Pnr": "8841529248",
  //     "TrainNo": "11407",
  //     "TrainName": "PUNE LUCKNOW EXP",
  //     "Doj": "18-04-2023",
  //     "BookingDate": "19-12-2022",
  //     "Quota": "GN",
  //     "DestinationDoj": "20-04-2023",
  //     "SourceDoj": "18-04-2023",
  //     "From": "PUNE",
  //     "To": "LJN",
  //     "ReservationUpto": "LJN",
  //     "BoardingPoint": "PUNE",
  //     "Class": "SL",
  //     "ChartPrepared": false,
  //     "BoardingStationName": "Pune Junction",
  //     "TrainStatus": "",
  //     "TrainCancelledFlag": false,
  //     "ReservationUptoName": "Lucknow Junction",
  //     "PassengerCount": 2,
  //     "PassengerStatus": [
  //       {
  //         "Pnr": null,
  //         "Number": 1,
  //         "Prediction": null,
  //         "PredictionPercentage": "100",
  //         "ConfirmTktStatus": "Confirm",
  //         "Coach": "S5",
  //         "Berth": 49,
  //         "BookingStatus": "CNF S5 49",
  //         "CurrentStatus": "CNF",
  //         "CoachPosition": null,
  //         "BookingBerthNo": "49",
  //         "BookingCoachId": "S5",
  //         "BookingStatusNew": "CNF",
  //         "BookingStatusIndex": "0",
  //         "CurrentBerthNo": "",
  //         "CurrentCoachId": "",
  //         "BookingBerthCode": "LB",
  //         "CurrentBerthCode": null,
  //         "CurrentStatusNew": "CNF",
  //         "CurrentStatusIndex": "0"
  //       },
  //       {
  //         "Pnr": null,
  //         "Number": 2,
  //         "Prediction": null,
  //         "PredictionPercentage": "100",
  //         "ConfirmTktStatus": "Confirm",
  //         "Coach": "S5",
  //         "Berth": 50,
  //         "BookingStatus": "CNF S5 50",
  //         "CurrentStatus": "CNF",
  //         "CoachPosition": null,
  //         "BookingBerthNo": "50",
  //         "BookingCoachId": "S5",
  //         "BookingStatusNew": "CNF",
  //         "BookingStatusIndex": "0",
  //         "CurrentBerthNo": "",
  //         "CurrentCoachId": "",
  //         "BookingBerthCode": "MB",
  //         "CurrentBerthCode": null,
  //         "CurrentStatusNew": "CNF",
  //         "CurrentStatusIndex": "0"
  //       }
  //     ],
  //     "DepartureTime": "22:00",
  //     "ArrivalTime": "00:50",
  //     "ExpectedPlatformNo": "2",
  //     "BookingFare": "1240",
  //     "TicketFare": "1240",
  //     "CoachPosition": "L SLR GS GS S1 S2 S3 S4 S5 S6 S7 S8 S9 B1 B2 B3 B4 B5 A1 GS SLR",
  //     "Rating": 3.8,
  //     "FoodRating": 3.4,
  //     "PunctualityRating": 4,
  //     "CleanlinessRating": 4.1,
  //     "SourceName": "PUNE",
  //     "DestinationName": "LUCKNOW",
  //     "Duration": "26:50",
  //     "RatingCount": 183,
  //     "HasPantry": false,
  //     "ToDetails": {
  //       "category": "A1",
  //       "division": "LUCKNOW",
  //       "latitude": "26.8316998",
  //       "longitude": "80.9191505",
  //       "state": "UTTAR PRADESH",
  //       "stationCode": "LJN",
  //       "stationName": "LUCKNOW JN."
  //     },
  //     "ReservationUptoDetails": {
  //       "category": "A1",
  //       "division": "LUCKNOW",
  //       "latitude": "26.8316998",
  //       "longitude": "80.9191505",
  //       "state": "UTTAR PRADESH",
  //       "stationCode": "LJN",
  //       "stationName": "LUCKNOW JN."
  //     }
  //   }
  // }

  useEffect(() => {
    if (pnrNumber) {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'faeca5e3dfmsh04ba3f5b4887182p1f2772jsnc0b401e4b225',
          'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
      };
      
      fetch(`https://irctc1.p.rapidapi.com/api/v3/getPNRStatus?pnrNumber=${pnrNumber}`, options)
        .then(response => response.json())
        .then(response => {
          if (response.status) {
            console.log(response);
            setData(response)
          }
          else{
            setError(true);
          }
        })
        .catch(err => {
          setError(true);
        });
    }
  }, [pnrNumber]);

  const handleSearch = () => {
    const pnrNumber = document.getElementById("pnrNumber").value;
    setPnrNumber(pnrNumber);
    setShowPnrStatus(true);
    console.log("handle search fired");
  };
  return (
    <>
    {error && <Error errMessage="Couldn't fetch pnr data for this pnr number at this moment. Please try again and check the pnr number. There is a possibilty that this pnr number is flushed now." />}
      <div className='PNR_no'>
        PNR Status
        <div className='checkpnr'>
          <form>
            PNR Number<br></br>
            <input type='text' id='pnrNumber'></input>
          </form>
          <div className="Check">
            <Button className='active' onClick={handleSearch} content="Check PNR Status" style={{ width: '200px', height: '40px', fontWeight: '100', borderRadius: '5px', fontSize: '20px' }}> Search Train</Button>
          </div>
        </div>
      </div>
      {(!showPnrStatus || !data) && (<div className='logo2'>
        <img src="./src/images/AppLogo.png" alt="" />
      </div>)}
      {showPnrStatus && data && (<div className='PNR'>
        <div className='PNR_details'>
          <ul>
            <li><span>PNR: </span>{data.data.Pnr}</li>
            <li><span>Booked On: </span>{data.data.BookingDate}</li>
          </ul>
          <ul>
            <li><span>Train Number: </span>{data.data.TrainNo}</li>
            <li><span>Train Name: </span>{data.data.TrainName}</li>
          </ul>
        </div>
        <div className='Source_Des'>
          <ul>
            <li>{data.data.SourceDoj}, {data.data.DepartureTime}<br></br>{data.data.BoardingStationName} ({data.data.From})</li>
            <li>{(data.data.Duration).substr(0, 2) + "h " + (data.data.Duration).substr(3, 2) + "m"}</li>
            <li>Quota: {data.data.Quota}</li>
            <li>{data.data.DestinationDoj}, {data.data.ArrivalTime}<br></br>{data.data.ReservationUptoName} ({data.data.To})</li>
          </ul>
        </div>
        <div className='text_pass'> Passenger Details</div>
        <div className='PNR_table'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Coach</th>
                <th>Berth No.</th>
                <th>Berth Code</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                data.data.PassengerStatus.map(element => (
                  <tr key={element.Number}>
                    <td>Passenger {element.Number}</td>
                    <td>{data.data.Class}</td>
                    <td>{element.BookingCoachId}</td>
                    <td>{element.BookingBerthNo}</td>
                    <td>{element.BookingBerthCode}</td>
                    <td><span style={{backgroundColor: element.CurrentStatus==="CNF"?"#4dff00":""}}>{element.CurrentStatus}</span></td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
        <div className='Fare'>
          <div>
            Fare Details <br></br>
            Booking Fare: Rs.{data.data.BookingFare}
          </div>
          <div>
            Chart Prepared: {data.data.ChartPrepared?(<span style={{color: data.data.ChartPrepared? "#4dff00":""}}>Yes</span>):"No"}
          </div>

        </div>
      </div>)}
    </>

  )
}
