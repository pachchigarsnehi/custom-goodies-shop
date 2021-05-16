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
import "../index.css";

const Signup = () => {
  return (
    <div class="main-sign-up">
    
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        marginTop: "125px",
      }}
    >
      <Card className="text-center" style={{ width: "35rem" }}>
        <Card.Header>Sign up</Card.Header>
        <Form>

        <Form.Group as={Row} controlId="validateEmail">
        <Form.Label column sm={4}>
          Enter your name
        </Form.Label>
        <Col sm={12}>
          <InputGroup hasValidation>
            <Form.Control
              type="name"
              name="name"
              placeholder="Name"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
      </Form.Group>



          <Form.Group as={Row} controlId="validateEmail">
            <Form.Label column sm={4}>
             Enter your Email
            </Form.Label>
            <Col sm={12}>
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
            <Form.Label column sm={4}>
            Set your Password
            </Form.Label>
            <Col sm={12}>
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

          <Form.Group as={Row} controlId="validatePassword">
          <Form.Label column sm={4}>
            Re-enter Password
          </Form.Label>
          <Col sm={12}>
            <InputGroup hasValidation>
              <Form.Control
                type="password"
                name="password"
                placeholder="Confirm password"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please re-enter password
              </Form.Control.Feedback>
            </InputGroup>
          </Col>
        </Form.Group>
        <fieldset></fieldset>

          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign up</Button>
            </Col>
          </Form.Group>
        </Form>
      </Card>
    </Container>
    
   
    <div className="sign-up-link"><p>Already have an account? <a href="/login"> Sign in</a></p></div>
    
    </div>
  );
};

export default Signup;
