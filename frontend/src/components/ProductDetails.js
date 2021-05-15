import React, { useState, useEffect } from "react";

import "../index.css";
import { useParams } from "react-router-dom";

const SelectProducts = () => {
  const params = useParams();
  console.log("Params", params);

  const [detailProduct, setdetailProduct] = useState([]);

  // function to get a product
  const getProducts = async () => {
    //console.log("called");
    try {
      const response = await fetch(
        `http://localhost:8000/products/${params.id}`
      );
      const jsonData = await response.json();
      console.log(jsonData);
      //setProducts(jsonData);
      setdetailProduct(jsonData[0]);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  /*
  if(params){
    products.forEach(product => {
      if(product.product_id === params.id) {setdetailProduct(product);}
    });
}*/

  return (
    <div className="main">
      {detailProduct ? (
        <div className="product-detail-grid">
          <div className="image-box">
            <img
              className="img-large"
              src={detailProduct.images}
              alt={detailProduct.name}
            ></img>
          </div>

          <div className="details-block">
            <h1>{detailProduct.name}</h1>
            Price : {detailProduct.price}$
            <label for="orders">Orders number</label>
            <select className="products-number" name="orders" id="orders">
              <optgroup>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </optgroup>
            </select>
            <div className="button-padding">
              <button className="add-button">Add to Cart</button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SelectProducts;
