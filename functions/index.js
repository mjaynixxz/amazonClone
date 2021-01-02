const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const { response } = require("express");

const stripe = require("stripe")(
  "sk_test_51I595bHFifcPzb8SHx7TJVhKi9WAJRr6oNBuNWy8oqIJVRjRbm0wxf1IpMN2w0jZBzLfQS72rZMyWYxeWvmwtgQ600yeN387ku"
);

//Setting up API steps

//Api Config
const app = express();

//middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());

//API routes

app.get("/", (req, res) => res.status(200).send("Hello, You will be great"));

app.post("/payments/create", async (req, res) => {
  try {
    const total = req.query.total;

    console.log("Payment received", total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "ngn",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log("Something went wrong", error.message);
  }
});

//Listen command
exports.api = functions.https.onRequest(app);
