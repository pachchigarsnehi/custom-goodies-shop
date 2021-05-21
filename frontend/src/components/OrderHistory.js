import React, { useEffect, useState } from "react";

export default function OrderHistory() {
  const [product, setproduct] = useState([]);
  const [orders, setorders] = useState([]);
  const [selectedIndex, setselectedIndex] = useState(null);
  const getCategories = async () => {
    console.log("res is hre");
    try {
      const response = await fetch(
        `https://${process.env.REACT_APP_SERVER_IP}/order/customer/2`
      );
      const jsonData = await response.json();
      console.log(jsonData);
      // setcategories(jsonData)
      console.log(jsonData, "res is hre");
      setorders(jsonData);
    } catch (err) {
      console.error(err);
    }
  };
  const handleClick = async (item, i) => {
    console.log("res is hre");
    setselectedIndex(i);
    try {
      const response = await fetch(
        "https://${process.env.REACT_APP_SERVER_IP}/products/" + item.product_id
      );
      const jsonData = await response.json();
      console.log(jsonData);
      // setcategories(jsonData)
      setproduct(jsonData);
      console.log(jsonData, "res is hre");
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "10px",
          justifyContent: "space-around",
          padding: "10px",
          alignItems: "center",
          backgroundColor: "#eee",
        }}
      >
        <p>Purchase ID</p>
        <p>Date</p>
        <p>Quanitity</p>
        <p>Price</p>
      </div>
      <div>
        {orders.map((item, i) => {
          return (
            <div
              onClick={() => {
                handleClick(item, i);
              }}
              className="historyList"
              style={{
                display: "flex",
                margin: "20px",
                justifyContent: "space-around",
                padding: "10px",
                alignItems: "center",
                backgroundColor: "#eee",
              }}
            >
              <p>#{item.cart_id}</p>
              <p>{item.created_on.split("T")[0]}</p>
              <p>{item.quantity}</p>
              <p>${item.price}</p>
            </div>
          );
        })}
      </div>
      {product.length > 0 && (
        <div
          style={{
            display: "flex",
            margin: "10px",
            justifyContent: "left",
            padding: "10px",
            alignItems: "left",
            backgroundColor: "#eee",
          }}
        >
          {product.map((val, i) => {
            return (
              <div>
                <h2>Prodcut Details:</h2>
                <p>Item: {val.name}</p>
              </div>
            );
          })}
        </div>
      )}
      {orders[selectedIndex] && (
        <div
          style={{
            display: "flex",
            margin: "10px",
            justifyContent: "left",
            padding: "10px",
            alignItems: "left",
            backgroundColor: "#eee",
          }}
        >
          <div>
            <h5>Customizations:</h5>
            <p>Font: {orders[selectedIndex].font}</p>
            <p>Quote: "{orders[selectedIndex].quote}"</p>
          </div>
        </div>
      )}
    </div>
  );
}
