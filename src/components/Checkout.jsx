import { useCallback, useState } from "react";
import useRazorpay from "react-razorpay";
import { RazorpayOptions } from "react-razorpay";

export default function Checkout() {
  const Razorpay = useRazorpay();
  const [params, setParams] = useState({ amount: 100, email: "sajalkhawas81@gmail.com", name: "Sajal56" }); // Define params here

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
          console.log("Success: "+res);
  
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
  
          console.log(captureData);

          
        } else {
          console.log("Fail: "+res);
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
