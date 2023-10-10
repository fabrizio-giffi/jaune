const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

router.post("/", async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Mona en Jaune",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment: ", payment);
    res.json({
      message: "Payment succesfull",
      success: true,
    });
  } catch (err) {
    console.error("Error: ", err);
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
});

module.exports = router;
