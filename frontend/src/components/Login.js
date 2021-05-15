import React from "react";
import {
  Container,
  Card,
  Button,
  InputGroup,
  FormControl,
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
      <Card className="text-center" style={{ width: "25rem" }}>
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Card.Title>Enter Account Credentials</Card.Title>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="email">Email</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <br />
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="password">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <Button variant="primary">Log In</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
