import React, { useState, useEffect } from "react";

import "../index.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SelectProducts = () => {
  const params = useParams();
  console.log("Params", params);
const cart = useSelector(state => state.cart.cart)
const dispatch = useDispatch()
  const [detailProduct, setdetailProduct] = useState([]);
  const [updatecart, updatecartmessage] = useState(<p></p>);

const [quantity, setquantity] = useState(1)
const [text, settext] = useState('')
const [fontfamily, setfontfamily] = useState('')
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
const handleAdd=()=>{
  let obj={
    fontfamily,text,quantity,id:params.id,name:detailProduct.name,price:detailProduct.price

  }
  console.log(obj)
  let index=cart.findIndex(item=>{
    return item.id==obj.id
  })
  let newcart=[...cart]
  if(index==-1){
newcart.push(obj)
  }else{
    newcart[index].quantity=parseInt(newcart[index].quantity)+parseInt(quantity)
  }
console.log(newcart)
  dispatch({type:'UPDATE_CART',payload:newcart})
}
  return (
    <div className="main">
      {detailProduct ? (
        <div className="product-detail-grid">
          <div className="image-box">
            <img
              className="img-large"
              src={detailProduct.image}
              alt={detailProduct.name}
            ></img>
          </div>

          <div className="details-block">
            <h1>{detailProduct.name}</h1>
            Price : ${detailProduct.price}
            <label for="orders">Order quantity :</label>
            <select value={quantity} onChange={e=>setquantity(e.target.value)} className="products-number" name="order-qty" id="order-qty">
            
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              
            </select>
            <label for="customize-text">Text you want on you goodie :</label>
            <textarea
              id="customize-text"
              name="customize-text"
              rows="2"
              cols="1"
              value={text} onChange={e=>settext(e.target.value)} 
              maxlength="20"
              placeholder="Enter text here(max. 20 chars)"
            ></textarea>
            <label for="text-font">Pick text font :</label>
            <select value={fontfamily} onChange={e=>setfontfamily(e.target.value)} className="products-number" name="text-font" id="text-font">
              <optgroup>
                <option value="1">Arial</option>
                <option value="2">Impact</option>
                <option value="3">San Serif</option>
              </optgroup>
            </select>
            <div className="button-padding">
              <button
                className="add-button"
                onClick={() => {
                  handleAdd();
                }}
              >
                Add to Cart
              </button>
              {updatecart}
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
