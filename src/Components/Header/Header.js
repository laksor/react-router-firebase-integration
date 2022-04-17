import { Button, Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="shadow">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">JWL Accounting</Navbar.Brand>
          
          <Nav className="mx-auto">
          {<Nav.Link  className="header">
          <Link to="/">Home</Link>
          <Link  to="/products">Products</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/register">Register</Link>

          {user?.uid ? (
            <Button onClick={() => signOut(auth)}>Sign out</Button>
          ) : (
            <Link to="/login">Login</Link>
          )}

          </Nav.Link>}

            <span className="text-white py-3">
              {user?.displayName && user.displayName}
            </span>
          </Nav>
         
         
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
