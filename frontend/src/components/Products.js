import React, { Fragment, useState, useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ShowProducts = () => {
  //use state and hooks
  const [productsGroup, setProducts] = useState([]);

  // function to get and show all products
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      const products = await response.json();
      let productGroup = [];
      for (let i = 0; i + 3 < products.length; i = i + 3) {
        console.log(products[i], i);
        if (i === 0 || i % 3 === 0) {
          productGroup.push(
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={products[i].images[0]} />
                  <Card.Body>
                    <Card.Title>{products[i].name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{products[i].price}$</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Buy Now</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={products[i + 1].images[0]} />
                  <Card.Body>
                    <Card.Title>{products[i + 1].name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{products[i + 1].price}$</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Buy Now</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={products[i + 2].images[0]} />
                  <Card.Body>
                    <Card.Title>{products[i + 2].name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{products[i + 2].price}$</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Buy Now</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        }
      }
      setProducts(productGroup);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Fragment>
      {productsGroup.map((productGroup) => (
        <Container fluid="md">{productGroup}</Container>
      ))}
    </Fragment>
  );
};

export default ShowProducts;
