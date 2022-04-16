import { getAuth } from "firebase/auth";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from "../../firebase.init";
import "./Login.css";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <h1 className="fw-bold mb-5 mt-5 text-center">Log in</h1>
      <Form className="w-50 mx-auto">
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" className="rounded-pill" type="submit">
          Login
        </Button>
      </Form>
      
      <h3 className="text-center">-------- Or -------</h3>
      <div className="d-flex justify-content-center">
        <Button
          size="lg"
          className="btn btn-danger rounded-pill w-50 mt-3"
          type="submit"
          onClick={ () => signInWithGoogle()}
        >
          Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
