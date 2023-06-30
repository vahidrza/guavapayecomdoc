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

function Main() {
  function CopyToClickBoard(elementId, urlToCopy) {
    document.getElementById(elementId).onclick = () => {
      let copyNotification = document.createElement("span");
      let header = document.getElementById("header");
      copyNotification.textContent = "Successfully copied to Clickboard!";
      copyNotification.classList.add("copyNotification");
      header.appendChild(copyNotification);
      setTimeout(() => {
        header.removeChild(header.lastChild);
      }, 1200);
      navigator.clipboard.writeText(urlToCopy);
    };
  }

  return (
    <div id="main" className="main">
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
