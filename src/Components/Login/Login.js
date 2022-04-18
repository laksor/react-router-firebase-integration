import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import "./Login.css";

const auth = getAuth(app);

const Login = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from.pathname || "/";

  const [error, setError] = useState("");
  const [registered, setRegistered] = useState(false);
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePass = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckbox = (event) => {
    setRegistered(event.target.checked);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setEmail("");
          setPassword("");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setEmail("");
          setPassword("");
          verifyEmail();
          setUserName();
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    }
    event.preventDefault();
  };

  const passReset = () => {
    sendPasswordResetEmail(auth, email).then(() => {
      console.log("password reset");
    });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("updating name");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("email verify");
    });
  };

  const handleGoogle = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <Container>
        <h1 className="fw-bold mb-5 mt-5 text-center">
          {registered ? "Sign In" : "Sign up"}
        </h1>
        <Form.Group className="mb-2 mt-2">
          <Form.Check
            onChange={handleCheckbox}
            type="checkbox"
            label="Already Registered ?"
            feedback="You must check before submitting."
            feedbackType="invalid"
          />
        </Form.Group>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {!registered && (
            <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                onBlur={handleName}
                type="text"
                placeholder="Enter name"
                required
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3 mt-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmail}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePass}
              type="password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>

          <p className="text-danger">{error}</p>

          <Button onClick={passReset} variant="link">
            forget password ?
          </Button>
          <br />
          <Button className="rounded-pill" variant="danger" type="submit">
            {registered ? "Login" : "Register"}
          </Button>
        </Form>

        <h3 className="text-center">-------- Or -------</h3>
        <div className="d-flex justify-content-center">
          <Button
            size="lg"
            className="btn btn-danger rounded-pill w-50 mt-3"
            type="submit"
            onClick={() => handleGoogle()}
          >
            Continue with Google
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
