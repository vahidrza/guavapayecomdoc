import React, { useEffect } from "react";
import "./nav.css";

function Nav() {

  //Function to Go targetted Component
  let scrollToComponent = (e, targetComponent) => {
    const element = document.getElementById(targetComponent);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    e.preventDefault();
  }


  useEffect(() => {
    //Get All List Items
    const listItems = document.getElementsByClassName("navListItem");

    //Walking all list items
    for (let index = 0; index < listItems.length; index++) {
      //Setting color on hover action
      listItems[index].firstElementChild.onmouseenter = (e) => {
        for (let index = 0; index < listItems.length; index++) {
          //Removing all colored style from all elements except Selected
          if (listItems[index].classList.length === 1) {
            listItems[index].firstElementChild.style.color = "#FFF";
          }
        }
        //Setting color on hovered item
        e.target.style.color = "#EF6821";
      };

      //Removing color on mouse out
      listItems[index].firstElementChild.onmouseleave = (e) => {
        e.target.style.color = "#FFF";
      };

      //Removing class from other item
      listItems[index].firstElementChild.onclick = (e) => {
        for (let index = 0; index < listItems.length; index++) {
          listItems[index].classList.remove("active");
        }

        //Seting className on click the item
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
          <a id="introductionNavItem" href=" " onClick={(e) => scrollToComponent(e, 'introduction')}>Introduction</a>
        </li>
        <li className="navListItem">
          <a id="registerorderNavItem" href=" " onClick={(e) => scrollToComponent(e, 'registerorder')} >Order registration</a>
        </li>
        <li className="navListItem">
          <a id="checkthreedsNavItem" href=" " onClick={(e) => scrollToComponent(e, 'checkthreeds')}>Check 3DS version</a>
        </li>
        <li className="navListItem">
          <a id="paymentNavItem" href=" " onClick={(e) => scrollToComponent(e, 'payment')}>Payment</a>
        </li>
        <li className="navListItem">
          <a id="refundNavItem" href=" " onClick={(e) => scrollToComponent(e, 'refund')}>Refund</a>
        </li>
        <li className="navListItem">
          <a id="statusNavItem" href=" " onClick={(e) => scrollToComponent(e, 'status')}>Status check</a>
        </li>
        <li className="navListItem">
          <a id="balanceNavItem" href=" " onClick={(e) => scrollToComponent(e, 'balance')}>Balance check</a>
        </li>
        <li className="navListItem">
          <a id="notificationNavItem" href=" " onClick={(e) => scrollToComponent(e, 'notification')}>Notification service</a>
        </li>
        <li className="navListItem">
          <a id="errorcodesNavItem" href=" " onClick={(e) => scrollToComponent(e, 'errorcodes')}>List of error codes</a>
        </li>
        <li className="navListItem">
          <a id="fraudNavItem" href=" " onClick={(e) => scrollToComponent(e, 'fraud')}>Fraud rules</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
