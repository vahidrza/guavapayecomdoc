import React, { useEffect } from "react";
import "./balanceCheck.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function BalanceCheck({ CopyToClickBoard }) {
  useEffect(() => {
    CopyToClickBoard(
      "copyIcon7",
      "https://{base_url}/merchant/013/balance?user={username}&password={password}&currency=840"
    );
  });

  return (
    <div id="balance" className="balanceCheck component">
      <h1 className="componentHeading">Balance Check</h1>

      <div className="method">Method:</div>
      <div className="methodUrl">{"{base_url}/transaction/{code}/balance"}</div>

      <div id="copyArea13" className="copyArea">
        <div className="copyAreaContainer">
          <div className="copyAreaHeading">Request example:</div>
          <div className="copyAreaUrl">
            {
              "https://{base_url}/merchant/013/balance?user={username}&password={password}&currency=840"
            }
          </div>
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
              <td>mdorder</td>
              <td>ANS36</td>
              <td>Yes</td>
              <td>Unique order number in the E- commerce Payment Gateway.</td>
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
