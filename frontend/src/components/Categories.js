import React, { useEffect, useState } from "react";
import AllProducts from "./Products";

const api1 = "http://localhost:8000/products";
const api2 = "http://localhost:8000/products/category/";
export default function Categories(props) {
  const [products, setproducts] = useState([]);
  const { id } = props.match.params;
  const getCategoriesItems = async () => {
    console.log("res is hre");
    try {
      const response = await fetch(id == "products" ? api1 : api2 + id);
      const jsonData = await response.json();
      console.log(jsonData);
      setproducts(jsonData);
      console.log(jsonData, "res is hre");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCategoriesItems();
  }, []);

  useEffect(() => {}, []);
  console.log(id);
  return (
    <div>
      <AllProducts products={products} />
    </div>
  );
}
