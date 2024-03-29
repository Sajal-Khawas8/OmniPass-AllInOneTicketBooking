import React, { useState, useCallback } from 'react';
import '../css/SeatCard.css';
import Button from './Button';
import Error from './Error';
import useRazorpay from "react-razorpay";
import Success from './Success';
import { authenticated, userData } from './Navbar';

export default function SeatCard(props) {
    const Razorpay = useRazorpay();
    // const { isAuthenticated, user } = useAuth0();
    const [error, setError] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const params = {
        amount: (props.fare) * 100,
        email: userData ? userData.email : '',
        name: userData ? userData.name : '',
        category: "Train",
        carrierCode: props.trainNumber,
        carrierName: props.trainName,
    };

    async function createOrder(params) {
        const response = await fetch('http://localhost:4242/create-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error);
        }
        return data.order;
    }


    const handlePayment = useCallback(async () => {
        if ((authenticated && userData)) {
            const order = await createOrder(params);

            const options = {
                key: "rzp_test_lxz0Bq1hhvIAUt",
                amount: params.amount,
                currency: "INR",
                image: "https://www.renderforest.com/logo-maker/icons/5ec2420d221da04cb77361eb/b34edc677c53d2fa82843395ba36de21.svg",
                name: "OmniPass",
                handler: async (res) => {
                    if (res.razorpay_payment_id) {
                        // Capture payment and generate receipt
                        const captureResponse = await fetch(`http://localhost:4242/capture-payment/${res.razorpay_payment_id}`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                amount: params.amount,
                                email: params.email,
                                name: params.name,
                                category: params.category,
                                carrierCode: params.carrierCode,
                                carrierName: params.carrierName
                            }),
                        });
                        const captureData = await captureResponse.json();

                        if (captureData.error) {
                            throw new Error(captureData.error);
                        }
                        if (captureData.captured) {
                            setPaymentStatus("success");
                        }
                        else {
                            setPaymentStatus("fail");
                        }
                    } else {
                        setPaymentStatus("fail");
                    }
                },
                prefill: {
                    name: params.name,
                    email: params.email,
                    contact: 91
                },
                theme: {
                    color: "#000000",
                },
                modal: {
                    backdropclose: true,
                    confirm_close: true
                },
                payment_capture: 1
            };

            const rzpay = new Razorpay(options);
            rzpay.open();
        } else {
            setError(true);
        }
    }, [Razorpay, params]);
    return (
        <div className="seatCard">
            {error && (<Error errMessage="Please login and verify your email before booking your ticket." />)}
            <div className="fare">Rs. {props.fare}</div>
            <div className="date">{props.date}</div>
            <div className="seatsAvl">{props.status}</div>

            <Button content="Book Now" style={{ height: '32px', width: '125px', fontSize: '20px', fontWeight: '500' }} onClick={handlePayment}></Button>

            {paymentStatus === 'fail' && <Error errMessage="Payment failed. Please try again later." />}
            {paymentStatus === 'success' && <Success message="Payment successfull. Please Check your email for Ticket and Invoice." />}
        </div>
    )
}