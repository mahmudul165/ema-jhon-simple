import React from "react";
import "./Header.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Riview</Link>
        <Link to="/inventory">Manage Inventory</Link>
      </nav>
    </div>
  );
};

export default Header;
