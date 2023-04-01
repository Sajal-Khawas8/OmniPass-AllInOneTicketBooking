import './livestatus.css'
import Button from '../components/Button';

export default function LiveStatus() {
    return (
        <>
            <div className="Searchbox">
                <div className="Tno">
                    Train Number
                    <form> <input type="text" id='userSourceStation' /></form>
                </div>
                <div className="StartDate">
                    Train Start Date
                    <form><input type="date" id='userDepartureDate' /></form>
                </div>
                <div className="Search">
                    <Button className='active' content="Check Live Status" style={{ width: '200px', height: '40px', fontWeight: '100', borderRadius: '5px', fontSize: '20px' }}> Search Train</Button>
                </div>
            </div>
            <div className='Content'>
                <div className='Train_details'>
                    <ul>
                        <li>
                            <span>Netaji Express</span>
                        </li>
                        <li><span>12312</span></li>
                        <li>|37 Stops</li>
                    </ul>
                    Class: 5A 3A 2A 1A
                    <div className='type'>
                        Type:
                        <form><input type="button" value="Supercool" id="type"></input></form>
                    </div>
                </div>
                <div className='Traintime'>
                    <ul>
                        <li>23:55</li>
                        <li>08:05</li>
                    </ul>
                    <div className='Shapes'>
                        <div className='circle'>
                        </div>
                        <div className='line'>
                        </div>
                        <div className='circle'>
                        </div>
                    </div>
                    <div className='Stations'>
                        KLK<br></br>
                        Kalka
                        
                            <ul>
                                <li>S</li>
                                <li>M</li>
                                <li>T</li>
                                <li>W</li>
                                <li>T</li>
                                <li>F</li>
                                <li>S</li>
                            </ul>
                            HWH<br></br>
                            Howrah
                    </div>
                    
                </div>
                <div className='Calender'>
                    <ul>
                        <li>Thursday<br></br>30/03/2023</li>
                        <li>Friday<br></br>01/04/2023</li>
                        <li>Saturday<br></br>02/04/2023</li>
                        <li>Sunday<br></br>03/04/2023</li>
                        <li>Monday<br></br>04/04/2023</li>
                        
                    </ul>
                    <form><input type="button" value="Refresh" id="refresh"></input></form>
                </div>
                <div className='livestatus'>
                    <div className='tablehead'>
                            <th>Station            </th>
                            <th>Arrival</th>
                            <th>Departure</th>
                            <th>Delay</th>
                            <th>Hault</th>
                            
                    </div>
                    <div className='Table'><span>Thursday, 30 March,2023</span>
                    <table>
                        <tr><td>Kalka(klk)<br></br>0kms</td>
                        <td>Source</td>
                        <td>23:55<br></br>23:55</td>
                        <td>OnTime</td>
                        <td>1</td></tr></table></div>
                    
                </div>
                
            </div>


        </>
    )
}