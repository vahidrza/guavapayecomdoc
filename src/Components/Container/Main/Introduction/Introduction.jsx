import React, { useEffect } from "react";
import "./introduction.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function Introduction({ CopyToClickBoard }) {
  useEffect(() => {
    CopyToClickBoard("copyIcon1", "https://testepg.guavapay.com");
    CopyToClickBoard("copyIcon2", "https://epg.guavapay.com");
  });

  return (
    <div id="introduction" className="introduction component">
      <h1 className="componentHeading">Introduction</h1>
      <p className="componentParagraph">
        Interactions between the merchant and the E-commerce Payment Gateway are
        implemented as HTTP requests with
        POST method to specific
        URL. These are separate for each
        individual request type.
      </p>

      <p className="componentParagraph componentParagraphNotBottomMargin">
        The parameters used in the interactions are sent as parameters of
        POST request. Their values must be
        URL-encoded.
      </p>

      <p className="componentParagraph">
        The result of processing a request returns as a JSON object, for example:
        "errorCode":"12","errorMessage":"Empty amount".
      </p>

      <div id="copyArea1" className="copyArea">
        <div className="copyAreaContainer">
          <h3 className="copyAreaHeading">Sandbox URL:</h3>
          <div className="copyAreaUrl">https://testepg.guavapay.com</div>
        </div>
        <ContentCopyIcon sx={{ fontSize: 16 }} className="copyIcon" id="copyIcon1" fontSize="small" />

      </div>
      <span id="copyIcon1Notification" className="notification">Copied</span>
      <div id="copyArea2" className="copyArea">
        <div className="copyAreaContainer">
          <h3 className="copyAreaHeading">Live URL:</h3>
          <div className="copyAreaUrl">https://epg.guavapay.com</div>
        </div>
        <ContentCopyIcon sx={{ fontSize: 16 }} className="copyIcon" id="copyIcon2" fontSize="small" />
      </div>
      <span id="copyIcon2Notification" className="notification">Copied</span>

      <p className="componentParagraph">
        For authorization purposes, each request must include the login and
        password of the user who manages merchants that were generated during
        the user's registration. The values are sent as the following
        parameters:
      </p>
      <div className="tableContainer">
        <table className="componentTable">
          <thead>
            <tr>
              <td>Name</td>
              <td>Type</td>
              <td>Mandatory</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>userName</td>
              <td>AN..30</td>
              <td>Yes</td>
              <td>Login of the user generated during registration</td>
            </tr>
            <tr>
              <td>password</td>
              <td>AN..30</td>
              <td>Yes</td>
              <td>Password of the user generated during registration</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="componentParagraph componentParagraphNotBottomMargin">
        Payment — a payment for goods or
        services executed through the Internet with the use of a bank card. It
        is executed as one action that does not require additional confirmation.
        Order of the requests is described below:
      </p>

      <ul className="introductionList">
        <li>Order registration request</li>
        <li>Payment request</li>
        <li>ACS</li>
        <li>Finish 3DS Payment Request</li>
        <li>Refund</li>
        <li>Status Check</li>
      </ul>
      <div className="paymentFlowContainer">
        <img src={`${process.env.PUBLIC_URL}/assets/img/paymentFlow.svg`} alt="Payment Flow" />
      </div>
    </div>
  );
}

export default Introduction;
