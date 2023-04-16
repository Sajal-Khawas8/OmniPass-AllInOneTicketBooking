import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom/client';
import SeatCard from './SeatCard';
import '../css/FlightCard.css';
import Button from './Button';


export default function FlightCard(props) {

    return (
        <div className="trainCard">
            <div className="trainDetails">
                <div className="block1">
                    <div className="number">{props.flight_code}</div>
                    <div className="name">{props.flight_name}</div>
                </div>
                <div className="block2">
                    <div className="source">
                        <div className="departuretime">{props.departure_date}</div>
                        <div className="departuretime">{props.departure_time}</div>
                        <div className="sourceCity">{props.departure_city}</div>
                    </div>
                    <div className="duration">
                        {props.duration}
                        <div className="line">
                            <div className="circle"></div>
                            <hr />
                            <div className="circle"></div>
                        </div>
                    </div>
                    <div className="destination">
                        <div className="arrivaldate">{props.arrival_date}</div>
                        <div className="arrivalTime">{props.arrival_time}</div>
                        <div className="destinationCity">{props.arrival_city}</div>
                    </div>
                </div>
                <Button content="Book now" />
            </div>

        </div>
    )
}