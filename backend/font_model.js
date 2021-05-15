const pool = require('./pg_pool')

const getFonts = async (request, response) => {
    await pool.query('SELECT * FROM fonts ORDER BY font_id ASC', (error, results) => {
        if (error) {
        response.status(500).send(error);
        }
        response.status(200).json(results.rows)
    })
}
const getFontByID = async (request, response) => {
    const id = parseInt(request.params.id)
  
    await pool.query('SELECT * FROM fonts WHERE font_id = $1', [id], (error, results) => {
      if (error) {
        response.status(500).send(error);
      }
      response.status(200).json(results.rows)
    })
}

module.exports = {
    getFonts,
    getFontByID,
  }