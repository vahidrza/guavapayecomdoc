import React from "react";
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
// import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function Main() {
  function CopyToClickBoard(elementId, urlToCopy) {
    // let copyNotification = document.querySelector(".copyNotification");
    document.getElementById(elementId).onclick = () => {
      // copyNotification.style.display = "inline-flex";
      // copyNotification.innerHTML = "Successfully copied to Clickboard!";
      navigator.clipboard.writeText(urlToCopy);
      setTimeout(() => {
        // copyNotification.style.display = "none";
        // copyNotification.innerHTML = "";
      }, 1500);
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
