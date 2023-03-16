import React from 'react'

export default function SeatCard(props) {
    return (
        <div className="seatCard">
            <div className="fare">Rs. {props.fare}</div>
            <div className="date">{props.date}</div>
            <div className="seatsAvl">{props.status}</div>
            <div className="btn">
                <button>Book Now</button>
            </div>
        </div>
    )
}
