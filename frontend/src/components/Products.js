import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../components/products.css';



const AllProducts = ({products}) => {
  //use state and hooks


  return (

    <div className="products-grid">
      {products.map((product) => (

        <div key={product.product_id} className="card">

          <div className="medium-image">

            <Link to={`/products/${product.product_id}`}>
              <img src={product.images[0]} alt={product.name} />
            </Link>

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