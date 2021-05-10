import React, { Fragment, useState, useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ShowProducts = () => {
  //use state and hooks
  const [products, setProducts] = useState([]);

  // function to get and show all products
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      const jsonData = await response.json();

      //console.log(jsonData);
      setProducts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  //console.log(products);

  return (
    <Fragment>
      {products.map(
        (
          product // with product object in json
        ) => (
          <Container fluid="md">
            <Row>
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={product.images[0]} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>{product.price}$</ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="#">Buy Now</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        )
      )}
    </Fragment>
  );
};

export default ShowProducts;
