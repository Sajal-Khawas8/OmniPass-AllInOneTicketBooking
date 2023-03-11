import './Train1.css'

export default function Train() {
    return (
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
                        <form> <input type="text" /></form>
                    </div>
                    <div className="To">
                        To
                        <form><input type="text" /></form>
                    </div>
                    <div className="DD">
                        Departure Date
                        <form><input type="date" /></form>
                    </div>
                    <div className="Search">
                    <form>
                        <input type="button" value="Search Train" />
                    </form>
                </div>
                </div>
                
            </div>
        </div>
    )
}
