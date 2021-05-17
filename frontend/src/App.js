import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import ProductDetailScreen from "./components/ProductDetailScreen";
import Login from "./components/Login";
import Signup from './components/Signup';
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Goodies Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Shop By Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Your Orders</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#deets">Hello, Guest</Nav.Link>
            <Nav.Link href="#deets">Cart</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div classname="main">
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/products/:id" component={ProductDetailScreen}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </div>

      <div className="fixed-bottom">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Text>Copyright @CSUN</Navbar.Text>
          </Container>
        </Navbar>
      </div>
    </BrowserRouter>
  );
}

export default App;
