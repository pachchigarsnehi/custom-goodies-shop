const pool = require('./pg_pool').pool

const getColors = (request, response) => {
    pool.query('SELECT * FROM color ORDER BY color_id ASC', (error, results) => {
        if (error) {
        response.status(500).send(error);
        }
        response.status(200).json(results.rows)
    })
}
const getColorByID = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM color WHERE color_id = $1', [id], (error, results) => {
      if (error) {
        response.status(500).send(error);
      }
      response.status(200).json(results.rows)
    })
}

module.exports = {
    getColors,
    getColorByID,
  }