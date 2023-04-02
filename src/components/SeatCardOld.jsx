import React from 'react'
import './SeatCard.css'
import Button from './Button'

export default function SeatCard(props) {
    return (
        <div className="seatCard">
            <div className="fare">Rs. {props.fare}</div>
            <div className="date">{props.date}</div>
            <div className="seatsAvl">{props.status}</div>
            <Button content="Book Now" style={{height: '27px', fontSize: '20px', fontWeight: '500'}}></Button>
            {/* <div className="btn">
                <button>Book Now</button>
            </div> */}
        </div>
    )
}