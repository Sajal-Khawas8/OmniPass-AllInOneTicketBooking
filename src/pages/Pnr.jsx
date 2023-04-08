import React from 'react'
import './Pnr.css'
import Button from '../components/Button';

export default function Pnr() {
  return (
    <><div className='PNR_no'>
      PNR Status
      <div className='checkpnr'>
        <form>
          PNR Number<br></br>
          <input type='text'></input>
        </form>
        <div className="Check">
          <Button className='active' onClick={() => setShowPNRStatus(true)} content="Check PNR Status" style={{ width: '200px', height: '40px', fontWeight: '100', borderRadius: '5px', fontSize: '20px' }}> Search Train</Button>
        </div>
      </div>
    </div>
    <div className='PNR'>
    <div className='PNR_details'>
      <ul>
        <li><span>PNR:</span>24534374929</li>
        <li><span>Booked On:</span>12-01-2023</li>
      </ul>
      <ul>
        <li><span>Train Number:</span>12312</li>
        <li><span>Train Name:</span> Netaji Express</li>
      </ul>
      </div>
      <div className='Source_Des'>
        <ul>
          <li>01:25,February 26<br></br>Chandigarh</li>
          <li>8h 48min</li>
          <li>Quota:GN</li>
          <li>10:13,February 26<br></br>Firozabad</li>
        </ul>
      </div>
      <div className='PNR_table'>
        Passenger Details
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Coach</th>
              <th>Class</th>
              <th>Berth No.</th>
              <th>Berth Code</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Passenger1</td>
              <td>S4</td>
              <td>SL</td>
              <td>17</td>
              <td>LB</td>
              <td><span>CNF</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='Fare'>
        Fare Details <br></br>
      Booking Fare:Rs.1280
      </div>
    </div>
</> 

  )
}
