const Pool = require('pg').Pool
const pool = new Pool({
  user: 'goodies-shop',
  host: 'localhost',
  database: 'goodies-shop',
  password: '12345',
  port: 5432,
});
const getCustomers = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM customers ORDER BY id ASC', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results);
      })
    }) 
  }
  const createCustomer = (body) => {
    return new Promise(function(resolve, reject) {
      const { name, address, email } = body
      pool.query('INSERT INTO customers (name, address, email) VALUES ($1, $2, $3) RETURNING *', [name, address, email], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`A new customer has been added added: ${results.rows[0]}`)
      })
    })
  }
  const deleteCustomer = () => {
    return new Promise(function(resolve, reject) {
      const id = parseInt(request.params.id)
      pool.query('DELETE FROM customers WHERE id = $1', [id], (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(`customer deleted with ID: ${id}`)
      })
    })
  }
  
  module.exports = {
    getCustomers,
    createCustomer,
    deleteCustomer,
  }