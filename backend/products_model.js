const pool = require("./pg_pool"); 
const getBaseProducts = async (request, response) => {
    await pool.query('SELECT * FROM baseproducts ORDER BY product_id ASC', (error, results) => {
        if (error) {
        response.status(500).send(error);
        }
        response.status(200).json(results.rows)
    })
}
const getBaseProductByID = async (request, response) => {
    const id = parseInt(request.params.id)

    await pool.query('SELECT * FROM baseproducts WHERE product_id = $1', [id], (error, results) => {
        if (error) {
        response.status(500).send(error);
        }
        response.status(200).json(results.rows)
    })
}

const getBaseProductsByCategoryID = async (request, response) => {
    const id = parseInt(request.params.id)

    await pool.query('SELECT * FROM baseproducts WHERE category_id = $1', [id], (error, results) => {
        if (error) {
        response.status(500).send(error);
        }
        response.status(200).json(results.rows)
    })
}

const getBaseProductsByColorID = async (request, response) => {
    const id = parseInt(request.params.id)

    await pool.query('SELECT * FROM baseproducts WHERE color_id = $1', [id], (error, results) => {
        if (error) {
        response.status(500).send(error);
        }
        response.status(200).json(results.rows)
    })
}
  
const updateBaseProduct = async (request, response) => {
    const id = parseInt(request.params.id)
    const { name, category_id, price, color_id, images } = request.body

    await pool.query(
        'UPDATE baseproducts SET name = $1, category_id = $2, price = $3, color_id= $4, images = $5 WHERE product_id = $6',
        [name, category_id, price, color_id, images, id],
        (error, results) => {
        if (error) {
            response.status(500).send(error);
        }
        response.status(200).send(`Baseproduct modified with Product ID: ${id}`)
        }
    )
}
  
const createBaseProduct = async (request, response) => {
    const { name, category_id, price, color_id, images } = request.body
    console.log(request.body)
    console.log(name, address, email)
    await pool.query('INSERT INTO baseproducts (name, category_id, price, color_id, images) VALUES ($1, $2, $3, $4, $5)  RETURNING *', [name, category_id, price, color_id, images], (error, results) => {
        if (error) {
        throw error
        }
        console.log(results.rows[0].id)
        response.status(201).send(`BaseProduct added with ID: ${results.rows[0].id}, named ${results.rows[0].name}`)
    })
}
  
  
const deleteProductByID = async (request, response) => {
    const id = parseInt(request.params.id)

    await pool.query('DELETE FROM baseproducts WHERE product_id = $1', [id], (error, results) => {
        if (error) {
        response.status(500).send(error);
        }
        response.status(200).send(`BasePRoduct deleted with Product ID: ${id}`)
    })
}
  
  module.exports = {
    getBaseProducts,
    getBaseProductByID,
    getBaseProductsByCategoryID,
    getBaseProductsByColorID,
    createBaseProduct,
    updateBaseProduct,
    deleteProductByID
  }