import React from "react";
import {
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.elements.email.value);
    console.log(event.target.password.value);
  };
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
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="validateEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter an email
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="validatePassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter password
                </Form.Control.Feedback>
              </InputGroup>
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
