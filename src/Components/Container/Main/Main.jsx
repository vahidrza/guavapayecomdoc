import React, { useEffect } from "react";
import "./main.css";
import Introduction from "./Introduction/Introduction";
import OrderRegistrationRequest from "./OrderRegistrationRequest/OrderRegistrationRequest";
import CheckThreedsVersionRequest from "./CheckThreedsVersionRequest/CheckThreedsVersionRequest";
import PaymentRequest from "./PaymentRequest/PaymentRequest";
import Refund from "./Refund/Refund";
import StatusCheck from "./StatusCheck/StatusCheck";
import BalanceCheck from "./BalanceCheck/BalanceCheck";
import MerchantNotificationService from "./MerchantNotificationService/MerchantNotificationService";
import ListOfErrorCodes from "./ListOfErrorCodes/ListOfErrorCodes";
import FraudRules from "./FraudRules/FraudRules";

function Main() {
  useEffect(() => {
    //Getting Components and List Items
    const components = document.getElementsByClassName("component");
    const listItems = document.getElementsByClassName("navListItem");

    //Walking on all Components
    for (let index = 0; index < components.length; index++) {
      components[index].onmouseenter = (e) => {
        document.getElementsByClassName('icon')[0].classList.remove('icon');
        //Removing active class from all list items
        for (let index = 0; index < listItems.length; index++) {
          listItems[index].classList.remove("active");
        }
        //Creating and inserting new item for clicked item
        let icon = document.createElement('span');
        icon.classList.add('icon');
        let parent = document.getElementById(`${e.target.id}NavItem`).parentElement;
        //Adding active class to hovered component's list item
        parent.classList.add("active");
        //Inserting the icon to the list item
        parent.insertBefore(icon, parent.firstChild);
      };
    }
  });

  //Function to Copy to Clickboard
  function CopyToClickBoard(elementId, urlToCopy) {
    document.getElementById(elementId).onclick = (e) => {
      navigator.clipboard.writeText(urlToCopy);

      const notification = document.createElement('div');
      notification.classList.add('notification');
      notification.innerHTML = "Copied"

      let parentElement = e.target.parentElement.firstChild;
      parentElement.style.marginTop = "1.4rem";
      parentElement.appendChild(notification);

      setTimeout(() => {
        document.getElementsByClassName('notification')[0].innerHTML = "";
        document.getElementsByClassName('notification')[0].classList.remove('notification');
        parentElement.style.marginTop = "0";

      }, 1000);
    };
  }

  return (
    <div id="main" className="main">
      <h1 className="headerInfo">
        E-commerce Payment Gateway API Specification
      </h1>
      <Introduction CopyToClickBoard={CopyToClickBoard} />
      <OrderRegistrationRequest CopyToClickBoard={CopyToClickBoard} />
      <CheckThreedsVersionRequest CopyToClickBoard={CopyToClickBoard} />
      <PaymentRequest CopyToClickBoard={CopyToClickBoard} />
      <Refund />
      <StatusCheck CopyToClickBoard={CopyToClickBoard} />
      <BalanceCheck CopyToClickBoard={CopyToClickBoard} />
      <MerchantNotificationService CopyToClickBoard={CopyToClickBoard} />
      <ListOfErrorCodes />
      <FraudRules />
    </div>
  );
}

export default Main;
