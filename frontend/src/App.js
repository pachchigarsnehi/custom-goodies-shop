import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import {
  BrowserRouter,
  Route,
  Switch,
  useHistory,
  withRouter,
  Link,
} from "react-router-dom";
import Categories from "./components/Categories";
import HomeScreen from "./components/HomeScreen";
import ProductDetailScreen from "./components/ProductDetailScreen";
import Login from "./components/Login";
import Signup from "./components/Signup";
import OrderHistory from "./components/OrderHistory";
import { FiShoppingCart } from "react-icons/fi";
import "./index.css";

function App(props) {
  const idGenerator = () => {
    let id = Math.floor(Math.random() * 100000);

    return id;
  };
  const [categories, setcategories] = useState([
    { category_name: "Sweatshirts", id: 1 },
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
        <Navbar.Brand>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Goodies Shop
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              style={{ color: "black", backgroundColor: "#fff" }}
              title="Products"
              id="collasible-nav-dropdown"
            >
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
              <NavDropdown.Divider />
              <NavDropdown.Item
                onClick={() => {
                  props.history.push("/Categories/products");
                }}
              >
                All Products
              </NavDropdown.Item>
            */}
              <NavDropdown.Item
                onClick={() => {
                  props.history.push("/Categories/products");
                }}
              >
                All Products
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/OrderHistory"
              >
                Order History
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Cart"
              >
                <FiShoppingCart size="15px" />
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Signup"
              >
                Sign Up
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/Login"
              >
                Login
              </Link>
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
          <Route path="/products/:id" component={ProductDetailScreen}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/OrderHistory" component={OrderHistory}></Route>
        </Switch>
      </div>

      <div className="fixed-bottom">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Text>Copyright @CSUN</Navbar.Text>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default withRouter(App);
