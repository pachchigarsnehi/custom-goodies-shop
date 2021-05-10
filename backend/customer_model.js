const pool = require('./pg_pool').pool


const getCustomers = async (request, response) => {
  await pool.query('SELECT * FROM customers ORDER BY id ASC', (error, results) => {
    if (error) {
      response.status(500).send(error);
    }
    response.status(200).json(results.rows)
  })
}
const getCustomerByID = async (request, response) => {
  const id = parseInt(request.params.id)

  await pool.query('SELECT * FROM customers WHERE id = $1', [id], (error, results) => {
    if (error) {
      response.status(500).send(error);
    }
    response.status(200).json(results.rows)
  })
}

const updateCustomer = async (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email, address } = request.body

  await pool.query(
    'UPDATE customers SET name = $1, email = $2, address = $3 WHERE id = $4',
    [name, email, address, id],
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const createCustomer = async (request, response) => {
  const { name, email, address } = request.body
  console.log(request.body)
  console.log(name, address, email)
  await pool.query('INSERT INTO customers (name, address, email) VALUES ($1, $2, $3)  RETURNING *', [name, address, email], (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows[0].id)
    response.status(201).send(`User added with ID: ${results.rows[0].id}, named ${results.rows[0].name}`)
  })
}


const deleteCustomer = async (request, response) => {
  const id = parseInt(request.params.id)

  await pool.query('DELETE FROM customers WHERE id = $1', [id], (error, results) => {
    if (error) {
      response.status(500).send(error);
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getCustomers,
  getCustomerByID,
  createCustomer,
  updateCustomer,
  deleteCustomer,
}