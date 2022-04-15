import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Register.css";

const Register = () => {
    

  return (
    <div>
      <h1 className="text-center fw-bold mt-5 mb-5">Register</h1>
      <Form  className="mx-auto w-50">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
        </Form.Group>

        <Button variant="danger" className="rounded-pill" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
