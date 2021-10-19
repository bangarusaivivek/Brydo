import React from 'react';
import axios from 'axios';

const paymentHandler = async (e) => {
    // const API_URL = 'http://localhost:5000/'
    console.log("i am payment hadler")
    e.preventDefault();
    // const orderUrl = `${API_URL}order`;
    const response = await axios.get('http://localhost:5000/riderdashboard/rentals/booking/payment');
    const { data } = response;
    console.log(response)
    const options = {
      key: 'rzp_test_ZYo1CSsfd37P7i',
      name: "Brydo",
      image: "/logo192.png", //"/innova.png"
      description: "Some Description",
      order_id: data.id,
      handler: async (response) => {
        try {
         const paymentId = response.razorpay_payment_id;
        //  const url = `${API_URL}capture/${paymentId}`;
        //  const captureResponse = await Axios.post(url, {})
         console.log(paymentId);
         console.log(options.order_id)
         
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#686CFD",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    };

export default paymentHandler;