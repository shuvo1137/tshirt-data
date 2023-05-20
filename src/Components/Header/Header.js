import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h3>Welcome to t-shirt store</h3>
      <nav>
        <Link to="/home">home</Link>
        <Link to="/review">Reveiw Order</Link>
      </nav>
    </div>
  );
};

export default Header;
