import React, { useState, useEffect } from "react";
import '../components/products.css';



const AllProducts = () => {
  //use state and hooks
  const [products, setProducts] = useState([]);



  // function to get and show all products
  const getProducts = async () => {
  
    try {
      const response = await fetch("http://localhost:8000/products/");
      const jsonData = await response.json();
      //console.log(jsonData);
      setProducts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);



  return (

    <div className="products-grid">
      {products.map((product) => (
        
        <div key={product.product_id} className="card">
        
          <div className="medium-image">
          
          <a href={`/products/${product.product_id}`}>
          <img src={product.images[0]} alt={product.name} />
            </a>
          
          </div>
        
          <div className="product-name">
            {product.name}
          </div>
          
          <div className="product-price">
            {product.price}$
          </div>
        
        </div>
      
      ))}
    </div>
  );
};

  export default AllProducts;
