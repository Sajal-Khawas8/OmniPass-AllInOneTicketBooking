require("dotenv").config();
const express = require("express");
const Razorpay = require('razorpay');
const bodyParser = require('body-parser');
const cors = require('cors');

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
      res.status(500).json({ error: response.error });
    } else {
      res.json(response);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


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
