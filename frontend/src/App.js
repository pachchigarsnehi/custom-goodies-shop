import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { BrowserRouter,Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
<<<<<<< HEAD
import ProductDetailScreen from "./components/ProductDetailScreen";
=======
import ProductScreen from "./components/ProductScreen";
>>>>>>> main
import './index.css';


function App() {
  return (


    <BrowserRouter>

    
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Goodies Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/products/:id" component={ProductDetailScreen}></Route>
      </div>


      <div className="footer">Copyright CSUN</div>
    
    
      </BrowserRouter>


    
  );
}

export default App;
