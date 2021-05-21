import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const AllProducts = ({ products }) => {
  //use state and hooks
  {
    /*const [products, setProducts] = useState([]);

  // function to get and show all products
  const getProducts = async () => {
    try {
      const response = await fetch(`https://${process.env.REACT_APP_SERVER_IP}/products/`);
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
*/
  }

  return (
    <div className="products-page-grid">
      {products.map((product) => (
        <div key={product.product_id} className="products-page-card">
          <div>
            <Link to={`/products/${product.product_id}`}>
              <img
                className="img-medium"
                src={product.image}
                alt={product.name}
              />
            </Link>
          </div>

          <div className="product-page-name">{product.name}</div>

          <div className="product-page-price">${product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
