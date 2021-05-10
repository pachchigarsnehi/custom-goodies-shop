const express = require("express");
const app = express(); 
const cors = require("cors"); 
const pool = require("./pg_pool"); 


app.use(cors());

app.use(express.json());


// Routes
// API to get all products 
app.get("/products", async (req,res) => {

  try{
      
      
      const allBaseProducts = await pool.query("SELECT * FROM baseproducts");
      
      res.json(allBaseProducts.rows); // response
  
  }catch(err){
      
      console.error(err.message);
  
  }
  
  });


const port = process.env.PORT || "8000";
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});