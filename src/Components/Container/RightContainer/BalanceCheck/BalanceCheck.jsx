import React, { useEffect } from "react";
import "./balanceCheck.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";

function BalanceCheck() {
  useEffect(() => {
    document.getElementById("copyIcon7").onclick = () => {
      navigator.clipboard.writeText(
        "https://{base_url} /transaction/013/status?user=apiuser&password=apiuserpassword&sid=900000&mdorder=eed077dc-cad0-4ed5-8a15-608ffc592173"
      );
      alert("Successfully copied to Clickboard!");
    };
  }, []);

  return (
    <div id="balance" className="balanceCheck">
      <h1 className="componentHeading">Balance Check</h1>
      <p className="componentParagraph">
        <span className="text-bold">{"Method: "}</span>
        <span className="text-url">
          {"{base_url}/transaction/{code}/balance"}
        </span>
        <br />
        <br />
        <span className="text-bold">{"Request example: "}</span> <br />
        <span className="text-url">
          {
            "https://{base_url}/merchant/013/balance?user={username}&password={password}&currency=840"
          }
        </span>
        &nbsp;&nbsp;
        <CopyAllIcon className="copyIcon" id="copyIcon7" fontSize="medium" />
        <br />
        <br />
        <span className="text-bold">{"Request parameters:"}</span>
      </p>
      <br />
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
      <p className="componentParagraph">
        <br />
        <span className="text-bold">{"Response example:"}</span>
        <br />
        <br />
        <span className="iframe">
          <span className="text-url">{"{"}</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"available_amount": "0.0"
          <br />
          <span className="text-url">{"}"}</span>
        </span>
        <br />
        <br />
        <span className="text-bold">{"Response parameters:"}</span>
        <br />
        <br />
      </p>
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
