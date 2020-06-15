const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const enforce = require("express-sslify");
const nodemailer = require("nodemailer");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

const USER = process.env.USER;
const PASS = process.env.PASS;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});

// app.get("/serviceWorker.js", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "..", "build", "serviceWorker.js"));
// });

// app.post("/payment", (req, res) => {
//   const body = {
//     source: req.body.token.id,
//     amount: req.body.amount,
//     currency: "usd",
//   };

//   stripe.charges.create(body, (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       res.status(500).send({ error: stripeErr });
//     } else {
//       res.status(200).send({ success: stripeRes });
//     }
//   });
// });

// Instantiate the SMTP server
const transporter = nodemailer.createTransport({
  host: "secure.emailsrvr.com",
  port: 465,
  secure: true,
  auth: {
    user: USER,
    pass: PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

// POST route from contact form
app.post("/send", (req, res, next) => {
  // Specify what the email will look like
  const mailOpts = {
    from: `${req.body.name}`,
    to: USER,
    subject: `KENIDO: New message from ${req.body.name} (${req.body.email})`,
    text: `${req.body.message}`,
  };

  // Attempt to send the email
  transporter.sendMail(mailOpts, (error, data) => {
    if (error) {
      res.json({ status: "failure" });
    } else {
      res.json({ status: "success" });
    }
  });
});
