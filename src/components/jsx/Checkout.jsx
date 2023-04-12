import { useCallback, useState } from "react";
import useRazorpay from "react-razorpay";
import { RazorpayOptions } from "react-razorpay";
import Logo from '../../images/AppLogo.png'

export default function Checkout() {
  
  // const [paymentStatus, setPaymentStatus] = useState('');
    // const { loginWithRedirect, logout, isAuthenticated, error, user } = useAuth0();
    // const handlePaymentSuccess = (paymentRequest) => {
    //     setPaymentStatus('success');
    //     const invoice = generateInvoice(paymentRequest);
    //     sendEmail(user.email, 'Ticket cum Invoive', invoice);
    // };

    // const generateInvoice = (captureData) => {
    //     // Convert the logo image to a PDFMake-compatible JSON object
    //     const logoData = htmlToPdfmake(`<img src="${Logo}" />`);

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
    //         // generateInvoice((captureData.amount)/100, captureData.currency, captureData.contact, captureData.email, captureData.id, captureData.method)

    //             // Add invoice details
    //             { text: 'Invoice', style: 'header', alignment: 'center' },
    //             { text: 'Invoice Number:', style: 'subheader', margin: [0, 80, 0, 0] },
    //             { text: captureData.id, margin: [90, 80, 0, 0] },
    //             { text: 'Date:', style: 'subheader', margin: [0, 10, 0, 0] },
    //             { text: Date().substring(0, 24), margin: [90, 10, 0, 0] },
    //             { text: 'Amount:', style: 'subheader', margin: [0, 10, 0, 0] },
    //             { text: `${captureData.currency} ${((captureData.amount)/100)}`, margin: [90, 10, 0, 0] }
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
  
  const Razorpay = useRazorpay();
  const [params, setParams] = useState({ amount: 100, email: "sajalkhawas8@gmail.com", name: "Sajal56" }); // Define params here

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
            }),
          });
          const captureData = await captureResponse.json();
  
          if (captureData.error) {
            throw new Error(captureData.error);
          }
  
          console.log("captureData: ");
          console.log(captureData);
          // if (captureData.captured) {
          //   // generateInvoice((captureData.amount)/100, captureData.currency, captureData.contact, captureData.email, captureData.id, captureData.method)
          //   generateInvoice(captureData)
            
          // }

          
        } else {
          console.log("Fail: ");
          console.log(res);
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
      },
      payment_capture: 1 // Auto capture payment
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay, params]);

  return (
    <div className="Checkout">
      <button onClick={handlePayment}>Click</button>
    </div>
  );
}
