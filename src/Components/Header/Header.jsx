import "./header.css";
import React from "react";

function Header() {

  return (
    <div id="header" className="header">
      <div className="headerLogo">
        <a href="# ">
          <img src="https://apidocs.guavapay.com/images/logo2.jpg" alt="" />
        </a>
      </div>

      <div className="headerInfo">
        <h1 className="headerInfoHeading">
          E-commerce Payment Gateway API Specification
        </h1>
      </div>
    </div>
  );
}

export default Header;
