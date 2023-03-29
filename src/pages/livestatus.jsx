export default function LiveStatus()
{
    return(
    <div className=""="Searchbox">

    <div className=""="train_no">
        <form> Train Number<br><input type="text"></form>

        </div>

            <div className=""="date">

                <form> Train Start Date<input type="date"></form>

            </div>
            <input type="button" value="Search" id="button1">
            </div>
            <div className=""="livestatus">
                <div className=""="train_info">
                    12312<br>
                        Netaji Express
                        <br><br>
                            <div className=""="train_details">

                                Kalka &rarr; Howrah Junction<br>
                                    <div class="shapes">
                                        <div class="circle1"></div>
                                        <div class="line"></div>
                                        <div class="circle2"></div>
                                    </div>

                            </div>
                            <div className=""="source_des">
                                Starting
                                <div className=""="sdate">
                                    24 FEB,2023
                                </div>
                            </div>
                            <div className=""="sidebox">
                                Origin Station
                                <div className="os">
                                    Kalka (klk)<br>
                                        24-Feb-2023<br>
                                            Dep -23:55<br>
                                            </div>
                                        </div>
                                        <div className=""="line2"></div>
                                        <div className=""="sidebox">
                                            Destination Station
                                            <div className="os">
                                                Howrah Jn (HWH)<br>
                                                    25-Feb-2023<br>
                                                        Arr -9:14<br>
                                                        </div>
                                                    </div>
                                                    <div className=""="line2"></div>

                                            </div>
                                            <div className=""="status">
                                                <div className=""="line4"></div>
                                                <div className=""="circle2"></div>
                                                <div className=""="circle2"></div>
                                                <div className=""="circle2"></div>
                                                <div className=""="circle2"></div>
                                                <div className=""="circle2"></div>
                                                <span> 24-Feb-2023</span><br>
                                                    0 km
                                                    <table>
                                                        <tr>
                                                            <td> KLK-Kalka</td>
                                                            <td>Journey Start</td>
                                                            <td>&nbsp; &nbsp; </td>
                                                            <td> Dep-23:55<br>Schd:23:55</td>
                                                        </tr>
                                                    </table>
                                                    <div class="line3"></div>

                                                    <span> 25-Feb-2023</span><br>
                                                        24km
                                                        <table>
                                                            <tr>
                                                                <td> CNDM-Chandi Mandir</td>
                                                                <td>Stop 2m</td>
                                                                <td>Arr -00:14 <br>Schd: 00:13 </td>
                                                                <td> Dep-00:17
                                                                    Schd:00:15</td>
                                                            </tr>
                                                        </table>
                                                        <div className=""="line3"></div>
                                                        38km
                                                        <table>
                                                            <tr>
                                                                <td> CDG-Chandigarh</td>
                                                                <td>Stop 57m</td>
                                                                <td>Arr -00:30 <br>Schd: 00:28 </td>
                                                                <td> Dep-1:27
                                                                    Schd:1:25</td>
                                                            </tr>
                                                        </table>
                                                        <div className=""="line3"></div>
                                                        105km
                                                        <table>
                                                            <tr>
                                                                <td> UMB-Ambala Cant Jn</td>
                                                                <td>Stop 10m</td>
                                                                <td>Arr Schd: 2:10</td>
                                                                <td> Dep Schd:01:25</td>
                                                            </tr>
                                                        </table>
                                                        <div className=""="line3"></div>
                                                        147km
                                                        <table>
                                                            <tr>
                                                                <td> KKDE-Kurukshetra</td>
                                                                <td>Stop 2m</td>
                                                                <td>Arr Schd: 2:50</td>
                                                                <td> Dep Schd:2:52</td>
                                                            </tr>
                                                        </div>

                                                    </div>)
}