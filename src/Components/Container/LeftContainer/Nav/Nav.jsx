import React from "react";
import "./nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="navList">
        <li className="navListItem">
          <a href="#introduction">Introduction</a>
        </li>
        <li className="navListItem">
          <a href="#registerorder">Order Registration</a>
        </li>
        <li className="navListItem">
          <a href="#checkthreeds">Check 3DS Version</a>
        </li>
        <li className="navListItem">
          <a href="#payment">Payment</a>
        </li>
        <li className="navListItem">
          <a href="#refund">Refund</a>
        </li>
        <li className="navListItem">
          <a href="#status">Status Check</a>
        </li>
        <li className="navListItem">
          <a href="#balance">Balance Check</a>
        </li>
        <li className="navListItem">
          <a href="#notification">Notification service</a>
        </li>
        <li className="navListItem">
          <a href="#errorcodes">List of Error Codes</a>
        </li>
        <li className="navListItem">
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
