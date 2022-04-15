import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
    const {user, handleSignOut} = useFirebase();
  return (
    <div className="header p-5 shadow bg-dark">
      <nav className="text-center">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/register">Register</Link>
        {
            user?.uid 
            ?
            <Button onClick={handleSignOut}>Sign out</Button>
            :
            <Link to="/login">Login</Link>
        }
        <span className="text-white p-2">{user?.displayName && user.displayName} </span>
      </nav>
    </div>
  );
};

export default Header;
