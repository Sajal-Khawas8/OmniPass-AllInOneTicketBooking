require("dotenv").config();

// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// Fetch the publishable key to initialize Stripe.js
fastify.get("/publishable-key", () => {
  return { publishable_key: process.env.STRIPE_PUBLISHABLE_KEY };
});

// Create a payment intent and return its client secret
fastify.post("/create-payment-intent", async () => {
  const { amount } = request.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount,
    currency: "INR",
    payment_method_types: ["bancontact", "card"],
  });

  return { client_secret: paymentIntent.client_secret };
});


// Set up a webhook endpoint to listen for payment_intent.succeeded events
fastify.post("/stripe-webhook", async (request) => {
  const sig = request.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.log("Webhook signature verification failed.");
    return { statusCode: 400 };
  }

  if (event.type === "payment_intent.succeeded") {
    // Payment succeeded, handle it here
    const paymentIntent = event.data.object;
    console.log("Payment succeeded:", paymentIntent.id);
    // Do something with the paymentIntent object
  }
  else{
    console.log("Payment failed");
  }

  return { statusCode: 200 };
});


// Run the server
const start = async () => {
  try {
    await fastify.listen(5252);
    console.log("Server listening ... ");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();