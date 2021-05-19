import React from "react";
import {
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  Alert,
} from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Signup from "./Signup";

import "../index.css";

const Login = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.elements.email.value);
    console.log(event.target.password.value);
    let userData = {
      email: event.target.elements.email.value,
      password: event.target.password.value,
    };
    try {
      const response = await fetch("http://localhost:8000/customer/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const authUser = await response.json();
      if (response.status === 200) {
        console.log(authUser);
        console.log("is authenticated!");
        alert("Log in success");
      }
    } catch (err) {
      console.error("error happened", err.message);
      alert("Authentication failed");
    }
  };
  return (
    <div>
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

      <div className="sign-up-link">
        <p>
          Dont have an account? Sign up <Link to="/Signup">here</Link>
        </p>
      </div>

      <div>
        <Route path="/signup" component={Signup}></Route>
      </div>
    </div>
  );
};

export default Login;
