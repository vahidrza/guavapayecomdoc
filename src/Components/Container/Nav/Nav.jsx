import React from "react";
import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/logo2.svg`}
            alt="logo"
          />
        </a>
      </div>
      <ul className="navList">
        <li className="navListItem active">
          <a href="/">Introduction</a>
        </li>
        <li className="navListItem">
          <a href="#registerorder">Order registration</a>
        </li>
        <li className="navListItem">
          <a href="#checkthreeds">Check 3DS version</a>
        </li>
        <li className="navListItem">
          <a href="#payment">Payment</a>
        </li>
        <li className="navListItem">
          <a href="#refund">Refund</a>
        </li>
        <li className="navListItem">
          <a href="#status">Status check</a>
        </li>
        <li className="navListItem">
          <a href="#balance">Balance check</a>
        </li>
        <li className="navListItem">
          <a href="#notification">Notification service</a>
        </li>
        <li className="navListItem">
          <a href="#errorcodes">List of error codes</a>
        </li>
        <li className="navListItem">
          <a href="#fraud">Fraud rules</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
