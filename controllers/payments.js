const instance = require('../razorpay/razorpay.backend');

exports.doPayment = async (req,res) => {
    console.log("i am doing payment")
    try {
        const options = {
          amount: 10 * 500,
          currency: "INR",
          receipt: "receipt#1",
          payment_capture: 0,
        //   image: "/logo192.png",
     // 1 for automatic capture // 0 for manual capture
        };
        instance.orders.create(options, async function (err, order) {
        if (err) {
          return res.status(500).json({
            message: "Something Went Wrong",
          });
        }

        return res.status(200).json(order);
     });
    } 
    catch(err) {
      return res.status(500).json({
        message: "Something Went Wrong",
    });
    }

}