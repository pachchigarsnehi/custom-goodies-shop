import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch, useHistory, withRouter,Link } from "react-router-dom";
import Categories from "./components/Categories";
import HomeScreen from "./components/HomeScreen";
import ProductDetailScreen from "./components/ProductDetailScreen";
import Login from "./components/Login";
import Signup from './components/Signup';
import {FiShoppingCart} from 'react-icons/fi'
import "./index.css";

function App(props) {
  const idGenerator=()=>{
    let id=Math.floor(Math.random()*100000)
  
    return id
  }
    const [categories, setcategories] = useState([{category_name: "Sweatshirts", id:1},{category_name: "Shirts", id:2},{category_name: "Mugs", id:4}, {category_name: "Masks", id:5}])
    // function to get list of categories (endpoint is not working )
    const getCategories = async () => {
      console.log('res is hre');
      try {
        const response = await fetch("http://localhost:8000/category");
        const jsonData = await response.json();
        console.log(jsonData);
        // setcategories(jsonData)
        console.log(jsonData, 'res is hre');
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
        <Navbar.Brand ><Link style={{textDecoration:'none',color:'white'}} to='/'>Goodies Shop</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/*
            <NavDropdown title="Shop By Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            */}
            <NavDropdown title="Products" id="collasible-nav-dropdown">
              {categories.map((val, i) => {

                return <NavDropdown.Item key={i} onClick={() => { props.history.push('/Categories/' + val.id ) }}>{val.category_name}</NavDropdown.Item>
              })}
              {/* <NavDropdown.Item onClick={() => { hostory.push('/Categories/2') }}>Masks</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="/ProductScreen">Mugs</NavDropdown.Item> */}
              <NavDropdown.Divider />
              {/*
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            */}
            <NavDropdown.Item onClick={() => { props.history.push('/Categories/products'  ) }}>All Products</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Your Orders</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#deets">Hello, Guest</Nav.Link>
            <Nav.Link href="#deets"><FiShoppingCart size='15px'/></Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div classname="main">
        <Switch>
          <Route  path='/Categories/:id' component={(props)=>{return<Categories {...props} key={window.location.pathname}/>}} />
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/products/:id" component={ProductDetailScreen}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
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
