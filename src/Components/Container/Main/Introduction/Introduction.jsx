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
        implemented as <span className="text-bold">HTTP</span> requests with{" "}
        <span className="text-bold">POST</span> method to specific{" "}
        <span className="text-bold">URL</span>. These are separate for each
        individual request type.
      </p>

      <p className="componentParagraph componentParagraphNotBottomMargin">
        The parameters used in the interactions are sent as parameters of{" "}
        <span className="text-bold">POST</span> request. Their values must be{" "}
        <span className="text-bold">URL</span>-encoded.
      </p>

      <p className="componentParagraph">
        The result of processing a request returns as a{" "}
        <span className="text-bold">JSON</span> object, for example:
        <span className="text-url">
          {'{"errorCode":"12","errorMessage":"Empty amount"}.'}
        </span>
      </p>

      <div id="copyArea1" className="copyArea">
        <div className="copyAreaContainer">
          <h3 className="copyAreaHeading">Sandbox URL:</h3>
          <div className="copyAreaUrl">https://testepg.guavapay.com</div>
        </div>
        <ContentCopyIcon className="copyIcon" id="copyIcon1" fontSize="small" />
      </div>

      <div id="copyArea2" className="copyArea">
        <div className="copyAreaContainer">
          <h3 className="copyAreaHeading">Live URL:</h3>
          <div className="copyAreaUrl">https://epg.guavapay.com</div>
        </div>
        <ContentCopyIcon className="copyIcon" id="copyIcon2" fontSize="small" />
      </div>

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
        <span className="text-bold">Payment — </span>a payment for goods or
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
    </div>
  );
}

export default Introduction;
