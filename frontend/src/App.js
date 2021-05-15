import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  withRouter,
} from "react-router-dom";
import Categories from "./components/Categories";
import HomeScreen from "./components/HomeScreen";
import ProductScreen from "./components/ProductScreen";
import "./index.css";

function App(props) {
  const idGenerator = () => {
    let id = Math.floor(Math.random() * 100000);

    return id;
  };
  const [categories, setcategories] = useState([
    { category_name: "Hoodies", id: 1 },
    { category_name: "Shirts", id: 2 },
    { category_name: "Mugs", id: 4 },
    { category_name: "Masks", id: 5 },
  ]);
  // function to get list of categories (endpoint is not working )
  const getCategories = async () => {
    console.log("res is hre");
    try {
      const response = await fetch("http://localhost:8000/category");
      const jsonData = await response.json();
      console.log(jsonData);
      // setcategories(jsonData)
      console.log(jsonData, "res is hre");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Goodies Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/*
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            */}
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              {categories.map((val, i) => {
                return (
                  <NavDropdown.Item
                    key={i}
                    onClick={() => {
                      props.history.push("/Categories/" + val.id);
                    }}
                  >
                    {val.category_name}
                  </NavDropdown.Item>
                );
              })}
              {/* <NavDropdown.Item onClick={() => { hostory.push('/Categories/2') }}>Masks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="/ProductScreen">Mugs</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  props.history.push("/Categories/products");
                }}
              >
                All Products
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Cart</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div classname="main">
        <Switch>
          <Route
            path="/Categories/:id"
            component={(props) => {
              return <Categories {...props} key={window.location.pathname} />;
            }}
          />
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/products/:id" component={ProductScreen}></Route>
        </Switch>
      </div>

      <div className="footer">Copyright CSUN</div>
    </div>
  );
}

export default withRouter(App);
