import React, { useState, useCallback } from 'react';
import '../css/SeatCard.css'
import Button from './Button'
import Error from './Error';
import { useAuth0 } from '@auth0/auth0-react';
import useRazorpay from "react-razorpay";
import Success from './success';
import { authenticated, userData } from './Navbar'

export default function SeatCard(props) {
    const Razorpay = useRazorpay();
    // const { isAuthenticated, user } = useAuth0();
    const [paymentStatus, setPaymentStatus] = useState(null);
    const params = {
        amount: (props.fare) * 100,
        email: userData.email,
        name: userData.name,
        category: "Train",
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
        const order = await createOrder(params);

        const options = {
            key: "rzp_test_lxz0Bq1hhvIAUt",
            amount: params.amount,
            currency: "INR",
            image: "https://www.renderforest.com/logo-maker/icons/5ec2420d221da04cb77361eb/b34edc677c53d2fa82843395ba36de21.svg",
            name: "OmniPass",
            handler: async (res) => {
                if (res.razorpay_payment_id) {
                    console.log("Success: ");
                    console.log(res);

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
                        }),
                    });
                    const captureData = await captureResponse.json();

                    if (captureData.error) {
                        throw new Error(captureData.error);
                    }

                    console.log("captureData: ");
                    console.log(captureData);
                    if (captureData.captured) {
                        setPaymentStatus("success");
                    }
                    else {
                        setPaymentStatus("fail");
                    }


                } else {
                    console.log("Fail: ");
                    console.log(res);
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
    }, [Razorpay, params]);
    return (
        <div className="seatCard">
            {(!authenticated || !userData.email_verified) && (<Error errMessage="Please login and verify your email before booking your ticket" />)}
            <div className="fare">Rs. {props.fare}</div>
            <div className="date">{props.date}</div>
            <div className="seatsAvl">{props.status}</div>

            <Button content="Book Now" style={{ height: '27px', fontSize: '20px', fontWeight: '500' }} onClick={handlePayment}></Button>

            {paymentStatus === 'fail' && <Error errMessage="Payment failed. Please try again later." />}
            {paymentStatus === 'success' && <Success message="Payment successfull. Please Check your email for Ticket and Invoice." />}
        </div>
    )
}