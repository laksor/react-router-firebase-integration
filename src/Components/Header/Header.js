import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState} from "react-firebase-hooks/auth";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Header = () => {
  const [user] = useAuthState(auth);
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
            <Button onClick={() => signOut(auth)}>Sign out</Button>
            :
            <Link to="/login">Login</Link>
        }
        <span className="text-white p-2">{user?.displayName && user.displayName} </span>
      </nav>
    </div>
  );
};

export default Header;
