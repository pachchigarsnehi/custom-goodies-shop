const pool = require("./pg_pool");

const getCartAll = async (request, response) => {
  await pool.query(
    "SELECT * FROM cart ORDER BY cart_id ASC",
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      }
      response.status(200).json(results.rows);
    }
  );
};
const getCartByCustomerID = async (request, response) => {
  const customer_id = parseInt(request.params.id);

  await pool.query(
    "SELECT * FROM cart WHERE customer_id = $1",
    [customer_id],
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      }
      response.status(200).json(results.rows);
    }
  );
};

const updateCartEntryByID = async (request, response) => {
  const cart_id = parseInt(request.params.id);
  const { quantity, font, quote } = request.body;

  await pool.query(
    "UPDATE customers SET quantity = $1, font = $2, quote = $3 WHERE id = $4",
    [quantity, font, quote, cart_id],
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      }
      response.status(200).send(`cart entry modified with ID: ${id}`);
    }
  );
};

const createCartEntry = async (request, response) => {
  const { customer_id, product_id, font, quote, price, quantity } =
    request.body;
  console.log(request.body);
  await pool.query(
    "INSERT INTO cart (customer_id, product_id, font, quote, price, quantity) VALUES ($1, $2, $3, $4, $5, $6)  RETURNING *",
    [customer_id, product_id, font, quote, price, quantity],
    (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results.rows[0].cart_id);
      response
        .status(201)
        .send(`cart entry added with ID: ${results.rows[0].cart_id}`);
    }
  );
};

const deleteCartEntry = async (request, response) => {
  const cart_id = parseInt(request.params.id);

  await pool.query(
    "DELETE FROM cart WHERE cart_id = $1",
    [cart_id],
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      }
      response.status(200).send(`Cart Entry deleted with ID: ${cart_id}`);
    }
  );
};

const updateCartEntryOrderStatus = async (request, response) => {
  const cart_id = parseInt(request.params.id);
  const { ordered } = request.body;
  console.log(request.body);
  console.log(ordered);
  await pool.query(
    "UPDATE cart SET ordered = $1 WHERE cart_id = $2",
    [ordered, cart_id],
    (error, results) => {
      if (error) {
        console.log(error);
        response.status(500).send(error);
      }
      response.status(200).send(`cart entry modified with ID: ${cart_id}`);
    }
  );
};

const getOrdersByCustomerID = async (request, response) => {
  const customer_id = parseInt(request.params.id);
  const status = true;

  await pool.query(
    "SELECT * FROM cart WHERE customer_id = $1 and ordered = $2",
    [customer_id, status],
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getCartAll,
  getCartByCustomerID,
  updateCartEntryByID,
  createCartEntry,
  deleteCartEntry,
  updateCartEntryOrderStatus,
  getOrdersByCustomerID,
};
