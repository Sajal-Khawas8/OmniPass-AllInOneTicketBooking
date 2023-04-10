import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import Button from "./Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const CheckoutForm = () => {
  const initStripe = async () => {
    const res = await axios.get("/api/publishable-key");
    const publishableKey = await res.data.publishable_key;

    return loadStripe(publishableKey);
  };
  const stripePromise = initStripe();
  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });

  useEffect(() => {
    async function createPaymentIntent() {
      const response = await axios.post("/api/create-payment-intent", {});

      setClientSecretSettings({
        clientSecret: response.data.client_secret,
        loading: false,
      });
    }
    createPaymentIntent();
  }, []);

  return (
    <form style={{width:"70vw"}}>
      {clientSecretSettings.loading ? (
        <h1>Loading ...</h1>
      ) : (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: clientSecretSettings.clientSecret,
            appearance: { theme: "stripe" },
          }}
        >
          <PaymentElement />
          <Button content="Book"></Button>
        </Elements>
      )}
    </form>
  );
};

export default CheckoutForm;