import React, { useEffect } from "react";
import "./balanceCheck.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function BalanceCheck({ CopyToClickBoard }) {
  useEffect(() => {
    CopyToClickBoard(
      "copyIcon7",
      '{ "user": "Username123", "password": "password123", "currency": "978", "bankCode": "013", "from": "10.08.2023", "to": "29.09.2023" }'
    );
  });

  return (
    <div id="balance" className="balanceCheck component">
      <h1 className="componentHeading">Balance Check</h1>

      <div className="method">Method:</div>
      <div className="methodUrl">{"{base_url}/transaction/balance"}</div>

      <div id="copyArea13" className="copyArea">
        <div className="copyAreaContainer">
          <div className="copyAreaHeading">Request example:</div>
          <div className="copyAreaUrl">{"{"}</div>
          <div className="copyAreaUrl">{'"user": "Username123",'}</div>
          <div className="copyAreaUrl">{'"password": "password123",'}</div>
          <div className="copyAreaUrl">{'"currency": "978",'}</div>
          <div className="copyAreaUrl">{'"bankCode": "013",'}</div>
          <div className="copyAreaUrl">{'"from": "10.08.2023"'}</div>
          <div className="copyAreaUrl">{'"to": "29.09.2023"'}</div>
          <div className="copyAreaUrl">{"}"}</div>
        </div>
        <ContentCopyIcon sx={{ fontSize: 16 }} className="copyIcon" id="copyIcon7" fontSize="small" />
      </div>
      <span id="copyIcon7Notification" className="notification">Copied</span>

      <div className="method methodRequest">Request parameters:</div>

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
              <td>user</td>
              <td>AN..30</td>
              <td>Yes</td>
              <td>User's login</td>
            </tr>
            <tr>
              <td>password</td>
              <td>AN..30</td>
              <td>Yes</td>
              <td>User's password</td>
            </tr>
            <tr>
              <td>currency</td>
              <td>N3</td>
              <td>Yes</td>
              <td>Payment currency in the ISO 4217 format.</td>
            </tr>
            <tr>
              <td>bankCode</td>
              <td>N3</td>
              <td>Yes</td>
              <td>Will be provided during integration</td>
            </tr>
            <tr>
              <td>from</td>
              <td>DD.MM.YYYY</td>
              <td>Yes</td>
              <td>Start Date</td>
            </tr>
            <tr>
              <td>to</td>
              <td>DD.MM.YYYY</td>
              <td>Yes</td>
              <td>End Date</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="copyArea14" className="copyArea">
        <div className="copyAreaContainer">
          <div className="copyAreaHeading">Response example:</div>
          <div className="copyAreaUrl">{"{"}</div>
          <div className="copyAreaUrl">{'"available_amount": "0.0"'}</div>
          <div className="copyAreaUrl">{"}"}</div>
        </div>
      </div>

      <div className="method methodRequest">Response parameters:</div>

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
              <td>available_amount</td>
              <td>AN..9</td>
              <td>Yes</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BalanceCheck;
