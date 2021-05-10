import React,{ Fragment } from 'react';
import {Navbar, Nav} from 'react-bootstrap';


// components import
import ShowProducts from './components/Products';

function App() {
  
  return (

    <Fragment>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Goodies Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Add to cart</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Sign in
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>





      
    <div>
      <ShowProducts/>
    </div>

  </Fragment>
  
  );
}

export default App;