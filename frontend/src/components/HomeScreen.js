import React, { useEffect, useState } from "react";
import "../components/products.css";
import AllProducts from "./Products";
import headerHome from "./images/header-home.jpg";

// function to get and show all products
export default function HomeScreen(props) {
  const [products, setProducts] = useState([]);

  // function to get and show all products
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/products/");
      const jsonData = await response.json();
      console.log(jsonData);
      setProducts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <img src={headerHome} alt="girl with mask" />
      <AllProducts products={products} />
    </div>
  );
}
