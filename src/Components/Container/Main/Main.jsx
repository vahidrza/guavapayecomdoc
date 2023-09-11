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
import TestDetails from "./TestDetails/TestDetails";

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
        //Changing class for selected Nav item's icon
        document.getElementById(`${e.target.id}NavItem`).parentElement.firstChild.classList.add('icon');
        //Adding active class to hovered component's list item
        document.getElementById(`${e.target.id}NavItem`).parentElement.classList.add("active");
        //Inserting the icon to the list item
      };
    }
  });

  //Function to Copy to Clickboard
  function CopyToClickBoard(elementId, urlToCopy) {
    document.getElementById(elementId).onclick = () => {
      navigator.clipboard.writeText(urlToCopy);

      let notificationItem = document.getElementById(`${elementId}Notification`);

      notificationItem.style.display = "flex";

      let parent = document.getElementById(elementId).parentElement;

      if (elementId === "copyIcon1") {
        parent.style.marginBottom = "-6px";
      }

      else if (elementId === "copyIcon2") {
        parent.style.marginBottom = "-14px";
      }

      else if (elementId === "copyIcon3") {
        parent.style.marginBottom = "2px";
      }

      else if (elementId === "cardCopyIcon1" || elementId === "cardCopyIcon2" || elementId === "cardCopyIcon3" || elementId === "cardCopyIcon4" || elementId === "cardCopyIcon5" || elementId === "cardCopyIcon9" || elementId === "cardCopyIcon7" || elementId === "cardCopyIcon8" ) {
        parent.style.marginBottom = "-6px";
      }

      else if (elementId === "cardCopyIcon6"){
        parent.style.marginBottom = "-1.38rem";
      }

      else parent.style.marginBottom = "2px";

      setTimeout(() => {

        notificationItem.style.display = "none";

        if (elementId === "copyIcon1") {
          parent.style.marginBottom = "1rem";
        }

        else if (elementId === "copyIcon2") {
          parent.style.marginBottom = "0.5rem";
        }

        else if (elementId === "cardCopyIcon1" || elementId === "cardCopyIcon2" || elementId === "cardCopyIcon3" || elementId === "cardCopyIcon4" || elementId === "cardCopyIcon5" || elementId === "cardCopyIcon9" || elementId === "cardCopyIcon7" || elementId === "cardCopyIcon8") {
          parent.style.marginBottom = "1rem";
        }

        else if (elementId === "cardCopyIcon6"){
          parent.style.marginBottom = "0rem";
        }
        //|| 
        else parent.style.marginBottom = "1rem";

      }, 500);
    };
  }

  return (
    <div id="main" className="main">
      <h1 className="headerInfo" id="headerInfo">
        E-commerce Payment Gateway API Specification
      </h1>
      <Introduction CopyToClickBoard={CopyToClickBoard} />
      <OrderRegistrationRequest CopyToClickBoard={CopyToClickBoard} />
      <TestDetails CopyToClickBoard={CopyToClickBoard} />
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
