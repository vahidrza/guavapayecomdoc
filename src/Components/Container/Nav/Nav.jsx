import React, { useEffect } from "react";
import "./nav.css";

function Nav() {
  useEffect(() => {
    const listItems = document.getElementsByClassName("navListItem");
    for (let index = 0; index < listItems.length; index++) {
      listItems[index].onmouseenter = (e) => {
        for (let index = 0; index < listItems.length; index++) {
          if (listItems[index].classList.length === 1) {
            listItems[index].firstElementChild.style.color = "#FFF";
          }
        }
        e.target.firstElementChild.style.color = "#EF6821";
      };

      listItems[index].onmouseleave = (e) => {
        e.target.firstElementChild.style.color = "#FFF";
      };

      listItems[index].onclick = (e) => {
        for (let index = 0; index < listItems.length; index++) {
          listItems[index].classList.remove("active");
        }
        e.target.parentElement.classList.add("active");
      };
    }
  }, []);
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
          <a href="#introduction">Introduction</a>
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
