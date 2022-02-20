//Install express server
console.log("sdfsdf");
const express = require("express");
const bodyParser = require("body-parser");

// const authRoute = require('./routes/auth.route');
// const paymentRoute = require('./routes/payment.route');
// const messagesRoute = require('./routes/messages.route');

const app = express();

//todo need to be removed
app.get("/", (req, res) =>
  res.status(200).json({
    email: "sdfsdfsd",
    password: "sdfsdf",
    test: "test auth",
  })
);

app.use(require("morgan")("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require("cors")());

// app.use('/api/auth', authRoute);
// app.use('/api/payment', paymentRoute);
// app.use('/api/messages', messagesRoute);

module.exports = app;
