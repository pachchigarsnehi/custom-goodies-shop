const express = require("express");
const path = require("path");
const customer_model = require('./customer_model')

const app = express();
const port = process.env.PORT || "8000";

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

app.get("/", (req, res) => {
    res.status(200).send("hello people!");
  });

app.get('/customers', (req, res) => {
  customer_model.getCustomers()
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});