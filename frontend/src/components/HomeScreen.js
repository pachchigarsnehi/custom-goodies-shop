import React, { useEffect, useState } from "react";
import "../components/products.css";
import AllProducts from "./Products";
import Carousel from "../component/Carousel";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

// function to get and show all products
let images = [image1, image2, image3, image4, image5];
export default function HomeScreen(props) {
  const [products, setProducts] = useState([]);

  // function to get and show all products
  const getProducts = async () => {
    try {
      const response = await fetch(
        `http://${process.env.REACT_APP_SERVER_IP}/products/`
      );
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
    <div className="main">
      <Carousel data={images} />
      <AllProducts products={products} />
    </div>
  );
}
