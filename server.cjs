require("dotenv").config();
const express = require("express");
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const cors = require('cors');
const htmlToPdfmake = require('html-to-pdfmake');
const pdfMake = require('pdfmake/build/pdfmake');
const pdfFonts = require("pdfmake/build/vfs_fonts");


const app = express();
const port = process.env.PORT || 4242;

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount,
    currency: 'INR',
    receipt: `receipt#${Math.random().toString(36).substring(2, 15)}`,
    payment_capture: 1,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/capture-payment/:paymentId", async (req, res) => {
  const { paymentId } = req.params;
  const { amount } = req.body;

  try {
    const response = await razorpay.payments.capture(paymentId, amount);
    console.log(response);

    if (response.error) {
      console.log("Error in capture payment")
      res.status(500).json({ error: response.error });
    } else {
      res.json(response);
      sendEmail(response);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// async function sendEmail(response) {
//   // Create a nodemailer transporter with your email provider's SMTP settings
//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USERNAME,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   // Convert the logo image to a PDFMake-compatible JSON object
//   const logoData = htmlToPdfmake(`<img src="./src/images/AppLogo.png"></img>`);

//   // Define the PDF document structure
//   const docDefinition = {
//     content: [
//       // Add background image
//       {
//         image: logoData,
//         width: '100%',
//         height: '100%',
//         absolutePosition: { x: 0, y: 0 }
//       },
//       // Add logo on top right corner
//       {
//         image: logoData,
//         width: 50,
//         height: 50,
//         absolutePosition: { x: 520, y: 20 }
//       },

//       // Add invoice details
//       { text: 'Invoice', style: 'header', alignment: 'center' },
//       { text: 'Invoice Number:', style: 'subheader', margin: [0, 80, 0, 0] },
//       { text: response.id, margin: [90, 80, 0, 0] },
//       { text: 'Date:', style: 'subheader', margin: [0, 10, 0, 0] },
//       { text: Date().substring(0, 24), margin: [90, 10, 0, 0] },
//       { text: 'Amount:', style: 'subheader', margin: [0, 10, 0, 0] },
//       { text: `${response.currency} ${((response.amount) / 100)}`, margin: [90, 10, 0, 0] }
//     ],
//     styles: {
//       header: {
//         fontSize: 22,
//         bold: true,
//         margin: [0, 0, 0, 20]
//       },
//       subheader: {
//         fontSize: 16,
//         bold: true,
//         margin: [0, 0, 0, 5]
//       }
//     }
//   };

//   const pdf = await pdfMake.createPdf(docDefinition).getBuffer();

//   // Send the email with the PDF file attached
//   try {
//     await transporter.sendMail({
//       from: "gouravkhawas@gmail.com", // replace with your email address
//       to: response.email, // replace with the recipient's email address
//       subject: "Ticket cum Invoice",
//       text: "Dear Sir/Madam,\nThanks for booking your ticket on OmniPass.\nPlease find attached your Ticket cum Invoice.\nThanks & Regards\nOmniPass",
//       attachments: [{ filename: 'Ticket.pdf', content: pdf }],
//     });
//   } catch (error) {

//   }

// }

async function sendEmail(response) {
  try {
    // Create a nodemailer transporter with your email provider's SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Convert the logo image to a PDFMake-compatible JSON object
    // const logoData = htmlToPdfmake(`<img src="./src/images/AppLogo.png"></img>`);

    // Define the PDF document structure
    const docDefinition = {
      content: [
        // Add background image
        // {
        //   image: logoData,
        //   width: '100%',
        //   height: '100%',
        //   absolutePosition: { x: 0, y: 0 }
        // },
        // Add logo on top right corner
        // {
        //   image: logoData,
        //   width: 50,
        //   height: 50,
        //   absolutePosition: { x: 520, y: 20 }
        // },

        // Add invoice details
        { text: 'Invoice', style: 'header', alignment: 'center' },
        { text: 'Invoice Number:', style: 'subheader', margin: [0, 80, 0, 0] },
        { text: response.id, margin: [90, 80, 0, 0] },
        { text: 'Date:', style: 'subheader', margin: [0, 10, 0, 0] },
        { text: new Date().toString().substring(0, 24), margin: [90, 10, 0, 0] },
        { text: 'Amount:', style: 'subheader', margin: [0, 10, 0, 0] },
        { text: `${response.currency} ${((response.amount) / 100).toFixed(2)}`, margin: [90, 10, 0, 0] }
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

    const pdf = await pdfMake.createPdf(docDefinition).getBuffer();

    // Send the email with the PDF file attached
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USERNAME,
      to: response.email,
      subject: 'Ticket cum Invoice',
      text: 'Dear Sir/Madam,\nThanks for booking your ticket on OmniPass.\nPlease find attached your Ticket cum Invoice.\nThanks & Regards\nOmniPass',
      attachments: [{ filename: 'Ticket.pdf', content: pdf }],
    });

    console.log('Message sent: %s', info.messageId);
  } catch (error) {
    console.error(error);
  }
}



app.get('/check-payment-status/:paymentId', async (req, res) => {
  const { paymentId } = req.params;

  try {
    const payment = await razorpay.payments.fetch(paymentId);
    res.json(payment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
