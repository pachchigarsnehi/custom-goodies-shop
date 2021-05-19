const pool = require("./pg_pool");

const getCategories = async (request, response) => {
  await pool.query(
    "SELECT * FROM category ORDER BY category_id ASC",
    (error, results) => {
      if (error) {
        response.status(500).send(error);
      }
      response.status(200).json(results.rows);
    }
  );
};
const getCategoryByID = async (request, response) => {
  const id = parseInt(request.params.id);

  await pool.query(
    "SELECT * FROM category WHERE category_id = $1",
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
  getCategories,
  getCategoryByID,
};
