const pool = require("./pg_pool");

const getColors = async (request, response) => {
  await pool.query(
    "SELECT * FROM color ORDER BY color_id ASC",
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      }
      response.status(200).json(results.rows);
    }
  );
};
const getColorByID = async (request, response) => {
  const id = parseInt(request.params.id);

  await pool.query(
    "SELECT * FROM color WHERE color_id = $1",
    [id],
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getColors,
  getColorByID,
};
