import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h3 className="header__Title">XENUM</h3>
      </Link>
      <div className="header__Right">
        <Link to="/createTransfer">Create Transfer</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Header;
