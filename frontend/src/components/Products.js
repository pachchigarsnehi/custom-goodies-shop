import React, { useState, useEffect } from "react";
import '../index.css';



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

    <div className="products-page-grid">
      {products.map((product) => (
        
        <div key={product.product_id} className="products-page-card">
        
          <div>
          
          <a href={`/products/${product.product_id}`}>
          <img className="img-medium" src={product.images[0]} alt={product.name} />
            </a>
          
          </div>
        
          <div className="product-page-name">
            {product.name}
          </div>
          
          <div className="product-page-price">
            {product.price}$
          </div>
        
        </div>
      
      ))}
    </div>
  );
};

  export default AllProducts;