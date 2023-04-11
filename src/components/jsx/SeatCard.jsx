import React, { useState } from 'react';
import '../css/SeatCard.css'
import Button from './Button'
import Error from './Error';
import logo from '../../images/bus.png';
import { useAuth0 } from '@auth0/auth0-react';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
import sendgrid from '@sendgrid/mail';

export default function SeatCard(props) {
    // const [paymentStatus, setPaymentStatus] = useState('');
    // const { loginWithRedirect, logout, isAuthenticated, error, user } = useAuth0();
    // const handlePaymentSuccess = (paymentRequest) => {
    //     setPaymentStatus('success');
    //     const invoice = generateInvoice(paymentRequest);
    //     sendEmail(user.email, 'Ticket cum Invoive', invoice);
    // };

    // const generateInvoice = (paymentRequest) => {
    //     // Convert the logo image to a PDFMake-compatible JSON object
    //     const logoData = htmlToPdfmake(`<img src="${logo}" />`);

    //     // Define the PDF document structure
    //     const docDefinition = {
    //         content: [
    //             // Add background image
    //             {
    //                 image: logoData,
    //                 width: '100%',
    //                 height: '100%',
    //                 absolutePosition: { x: 0, y: 0 }
    //             },
    //             // Add logo on top right corner
    //             {
    //                 image: logoData,
    //                 width: 50,
    //                 height: 50,
    //                 absolutePosition: { x: 520, y: 20 }
    //             },
    //             // Add invoice details
    //             { text: 'Invoice', style: 'header', alignment: 'center' },
    //             { text: 'Invoice Number:', style: 'subheader', margin: [0, 80, 0, 0] },
    //             { text: paymentRequest.transactionId, margin: [90, 80, 0, 0] },
    //             { text: 'Date:', style: 'subheader', margin: [0, 10, 0, 0] },
    //             { text: paymentRequest.transactionDate, margin: [90, 10, 0, 0] },
    //             { text: 'Amount:', style: 'subheader', margin: [0, 10, 0, 0] },
    //             { text: `${paymentRequest.currencyCode} ${paymentRequest.transactionAmount}`, margin: [90, 10, 0, 0] }
    //         ],
    //         styles: {
    //             header: {
    //                 fontSize: 22,
    //                 bold: true,
    //                 margin: [0, 0, 0, 20]
    //             },
    //             subheader: {
    //                 fontSize: 16,
    //                 bold: true,
    //                 margin: [0, 0, 0, 5]
    //             }
    //         }
    //     };

    //     // Generate the PDF file
    //     const fileName = `Ticket-${paymentRequest.transactionId}.pdf`;
    //     pdfMake.createPdf(docDefinition).download(fileName);

    //     return fileName;
    // };

    // const sendEmail = (toEmail, subject, attachment) => {
    //     const msg = {
    //         to: toEmail,
    //         from: 'gouravkhawas@gmail.com', // Replace with your email address
    //         subject: subject,
    //         attachments: [
    //             {
    //                 content: attachment.buffer.toString('base64'),
    //                 filename: attachment.name,
    //                 type: attachment.type,
    //                 disposition: 'attachment',
    //             },
    //         ],
    //     };
    //     sendgrid.setApiKey('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'); // Replace with your SendGrid API key
    //     sendgrid.send(msg)
    //         .then(() => console.log('Email sent'))
    //         .catch((error) => console.error(error));
    // };


    // const handlePaymentError = (paymentRequest) => {
    //     setPaymentStatus('error');
    // };

    return (
        <div className="seatCard">
            <div className="fare">Rs. {props.fare}</div>
            <div className="date">{props.date}</div>
            <div className="seatsAvl">{props.status}</div>
            {/* <GooglePayButton environment='TEST'
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA', 'DISCOVER', 'AMEX'],
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'example',
                                    gatewayMerchantId: 'exampleGatewayMerchantId',
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'OmniPass',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: `${props.fare}`,
                        currencyCode: 'INR',
                        countryCode: 'IN',
                    },
                    shippingAddressRequired: false,
                    callbackIntents: ['PAYMENT_AUTHORIZATION'],
                }}
                onLoadPaymentData={handlePaymentSuccess}
                onError={handlePaymentError}
                buttonColor='Black' >

            </GooglePayButton> */}
            <Button content="Book Now" style={{height: '27px', fontSize: '20px', fontWeight: '500'}}></Button>
            {/* <div className="btn">
                <button>Book Now</button>
            </div> */}
            {/* {paymentStatus === 'error' && <Error errMessage="Payment failed. Please try again later." />} */}
        </div>
    )
}