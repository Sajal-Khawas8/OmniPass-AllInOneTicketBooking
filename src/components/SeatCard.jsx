import React, { useState } from 'react';
import './SeatCard.css';
import { GooglePayButton } from '@google-pay/button-react';
import { useAuth0 } from '@auth0/auth0-react';
import Error from './Error';
import logo from './logo.png';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default function SeatCard(props) {
    const [paymentStatus, setPaymentStatus] = useState('');
    const { loginWithRedirect, logout, isAuthenticated, error, user } = useAuth0();

    const handlePaymentSuccess = (paymentRequest) => {
        setPaymentStatus('success');
        const invoice = generateInvoice(paymentRequest);
        sendEmail(user.email, 'Invoice', invoice);
    };

    const mailgun = require('mailgun-js')({
        apiKey: '271caf3d840e2ee672014cb907645cf3-d51642fa-0e47930a',
        domain: 'sandbox6c4f2c495ece41589562301dcebcee05.mailgun.org'
    });

    const sendEmail = (toEmail, subject, attachment) => {
        const data = {
            from: 'OmniPass <support@OmniPass>',
            to: toEmail,
            subject: subject,
            attachment: attachment
        };

        mailgun.messages().send(data, (error, body) => {
            if (error) {
                console.log('Error sending email:', error);
            } else {
                console.log('Email sent:', body);
            }
        });
    };

    const handlePaymentError = (paymentRequest) => {
        setPaymentStatus('error');
    };

    const generateInvoice = (paymentRequest) => {
        // Convert the logo image to a PDFMake-compatible JSON object
        const logoData = htmlToPdfmake(`<img src="${logo}" />`);

        // Define the PDF document structure
        const docDefinition = {
            content: [
                // Add background image
                {
                    image: logoData,
                    width: '100%',
                    height: '100%',
                    absolutePosition: { x: 0, y: 0 }
                },
                // Add logo on top right corner
                {
                    image: logoData,
                    width: 50,
                    height: 50,
                    absolutePosition: { x: 520, y: 20 }
                },
                // Add invoice details
                { text: 'Invoice', style: 'header', alignment: 'center' },
                { text: 'Invoice Number:', style: 'subheader', margin: [0, 80, 0, 0] },
                { text: paymentRequest.transactionId, margin: [90, 80, 0, 0] },
                { text: 'Date:', style: 'subheader', margin: [0, 10, 0, 0] },
                { text: paymentRequest.transactionDate, margin: [90, 10, 0, 0] },
                { text: 'Amount:', style: 'subheader', margin: [0, 10, 0, 0] },
                { text: `${paymentRequest.currencyCode} ${paymentRequest.transactionAmount}`, margin: [90, 10, 0, 0] }
            ],
            styles: {
                header: {
                    fontSize: 22,
                    bold: true,
                    margin: [0, 0, 0, 20]
                },
                subheader: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 0, 0, 5]
                }
            }
        };

        // Generate the PDF file
        const fileName = `Ticket-${paymentRequest.transactionId}.pdf`;
        pdfMake.createPdf(docDefinition).download(fileName);

        return fileName;
    };


    const handleBookNowClick = () => {
        if (!isAuthenticated || !user.email_verified) {
            return <Error message="Please login and verify your email to book ticket." />;
        }

        const paymentRequest = {
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
                {
                    type: 'CARD',
                    parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                    },
                    tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                    },
                },
                {
                    type: 'UPI',
                    parameters: {
                        'pa': 'example@upi',
                        'pn': 'Merchant Name',
                        'tr': '1234567890',
                        'tn': 'Purchase Description',
                    },
                },
            ],
            merchantInfo: {
                merchantId: '12345678901234567890',
                merchantName: 'Demo Merchant',
            },
            transactionInfo: {
                totalPriceStatus: 'FINAL',
                totalPriceLabel: 'Total',
                totalPrice: props.fare,
                currencyCode: 'INR',
                countryCode: 'IN',
            },
            shippingAddressRequired: true,
            callbackIntents: ['PAYMENT_AUTHORIZATION'],
        };

        return (
            <GooglePayButton
                environment="TEST"
                paymentRequest={paymentRequest}
                onLoadPaymentData={handlePaymentSuccess}
                onError={handlePaymentError}
            />
        );
    };

    return (
        <div className="seatCard">
            <div className="fare">Rs. {props.fare}</div>
            <div className="date">{props.date}</div>
            <div className="seatsAvl">{props.status}</div>
            {handleBookNowClick()}
            {paymentStatus === 'error' && <Error message="Payment failed. Please try again later." />}
        </div>
    )
}
