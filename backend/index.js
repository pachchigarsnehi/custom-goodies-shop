const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
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
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
    res.status(200).send("hello people!");
  });


app.get('/customers', customer_model.getCustomers)
app.get('/customers/:id', customer_model.getCustomerByID)

app.post('/customers', customer_model.createCustomer)

app.put('/customers/:id', customer_model.updateCustomer)

app.delete('/customers/:id', customer_model.deleteCustomer)

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});