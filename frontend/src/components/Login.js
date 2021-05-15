import React from "react";
import {
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const Login = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        marginTop: "125px",
      }}
    >
      <Card className="text-center" style={{ width: "35rem" }}>
        <Card.Header>Login</Card.Header>
        <Form>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <fieldset></fieldset>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
