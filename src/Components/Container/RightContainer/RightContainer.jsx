import React from "react";
import "./rightcontainer.css";
import Introduction from "./Introduction/Introduction";
import OrderRegistrationRequest from "./OrderRegistrationRequest/OrderRegistrationRequest";
import CheckThreedsVersionRequest from "./CheckThreedsVersionRequest/CheckThreedsVersionRequest";
import PaymentRequest from "./PaymentRequest/PaymentRequest";
import Refund from "./Refund/Refund";
import StatusCheck from "./StatusCheck/StatusCheck";
import BalanceCheck from "./BalanceCheck/BalanceCheck";
import MerchantNotificationService from "./MerchantNotificationService/MerchantNotificationService";
import ListOfErrorCodes from "./ListOfErrorCodes/ListOfErrorCodes";
import Faq from "./Faq/Faq";

function RightContainer() {
  function CopyToClickBoard(elementId, urlToCopy) {
    document.getElementById(elementId).onclick = () => {
      navigator.clipboard.writeText(urlToCopy);
      alert("Successfully copied to Clickboard!");
    };
  }

  return (
    <div className="rightContainer">
      <Introduction CopyToClickBoard={CopyToClickBoard} />
      <OrderRegistrationRequest CopyToClickBoard={CopyToClickBoard} />
      <CheckThreedsVersionRequest CopyToClickBoard={CopyToClickBoard} />
      <PaymentRequest CopyToClickBoard={CopyToClickBoard} />
      <Refund CopyToClickBoard={CopyToClickBoard} />
      <StatusCheck CopyToClickBoard={CopyToClickBoard} />
      <BalanceCheck CopyToClickBoard={CopyToClickBoard} />
      <MerchantNotificationService CopyToClickBoard={CopyToClickBoard} />
      <ListOfErrorCodes CopyToClickBoard={CopyToClickBoard} />
      <Faq />
    </div>
  );
}

export default RightContainer;
