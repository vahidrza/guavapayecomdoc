import React, { useEffect } from "react";
import "./balanceCheck.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";

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
      <div className="text-bold-free">
        Method:
        <span className="text-url">
          {"{base_url}/transaction/{code}/balance"}
        </span>
      </div>

      <div className="text-bold-free">Request example:</div>
      <div className="text-url-free">
        {
          "https://{base_url}/merchant/013/balance?user={username}&password={password}&currency=840"
        }
        <CopyAllIcon className="copyIcon" id="copyIcon7" fontSize="medium" />
      </div>

      <div className="text-bold-free">{"Request parameters:"}</div>

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
      <div className="text-bold-free">{"Response example:"}</div>

      <div className="iframe">
        <div className="iframeLine text-url-list">{"{"}</div>
        <div className="iframeLine text-url-list">{'"available_amount": "0.0"'}</div>
        <div className="iframeLine text-url-list">{"}"}</div>
      </div>

      <div className="text-bold">{"Response parameters:"}</div>
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
  );
}

export default BalanceCheck;
