import React, { useEffect } from "react";
import "./statusCheck.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";

function StatusCheck({ CopyToClickBoard }) {
  useEffect(() => {
    CopyToClickBoard(
      "copyIcon6",
      "https://{base_url} /transaction/013/status?user=apiuser&password=apiuserpassword&sid=900000&mdorder=eed077dc-cad0-4ed5-8a15-608ffc592173"
    );
  });

  return (
    <div id="status" className="statusCheck component">
      <h1 className="componentHeading">Status Check</h1>
      <div className="text-bold-free">
        Method:
        <span className="text-url">
          {"{base_url}/transaction/{code}/status"}
        </span>
      </div>
      <div className="text-bold-free">{"Request example: "}</div>
      <div className="text-url-free">
        {
          "https://{base_url}/transaction/013/status?user=apiuser&password=apiuserpassword&sid=900000&mdorder=eed077dc-cad0-4ed5-8a15-608ffc592173"
        }
        <CopyAllIcon className="copyIcon" id="copyIcon6" fontSize="medium" />
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
          <tr>
            <td>sid</td>
            <td>ANS99</td>
            <td>Yes</td>
            <td>TerminalID</td>
          </tr>
        </tbody>
      </table>
      <div className="text-bold-free">{"Response example:"}</div>
      <div className="iframe">
        <div className="iframeLine text-bold-free-iframe">
          {'{"Description": "Request processed successfully",'}
        </div>
        <div className="iframeLine text-bold-free-iframe">"Amount": 50.0,</div>
        <div className="iframeLine text-bold-free-iframe">"Fee": 1.0,</div>
        <div className="iframeLine text-bold-free-iframe">
          "OrderId": "eed077dc-cad0-4ed5-8a15-608ffc592173",
        </div>
        <div className="iframeLine text-bold-free-iframe">"Code": "0",</div>
        <div className="iframeLine text-bold-free-iframe">
          "Timestamp": "2022-10-28 10:23:54.133177",
        </div>
        <div className="iframeLine text-bold-free-iframe">"Success": true,</div>
        <div className="iframeLine text-bold-free-iframe">
          "RRN": "000011341431",
        </div>
        <div className="iframeLine text-bold-free-iframe">
          "Auth": "524269",
        </div>
        <div className="iframeLine text-bold-free-iframe">"Currency": 978,</div>
        <div className="iframeLine text-bold-free-iframe">
          "Pan": "500000**0000",
        </div>
        <div className="iframeLine text-bold-free-iframe">
          "order_status": "2",
        </div>
        <div className="iframeLine text-bold-free-iframe">
          {'"status": "DEPOSITED"}'}
        </div>
      </div>

      <span className="text-bold-free">{"Response parameters:"}</span>
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
            <td>Status</td>
            <td>N1</td>
            <td>Yes</td>
            <td></td>
          </tr>
          <tr>
            <td>Description</td>
            <td>AN..512</td>
            <td>Yes</td>
            <td></td>
          </tr>
          <tr>
            <td>Amount</td>
            <td>N..20</td>
            <td>No</td>
            <td></td>
          </tr>
          <tr>
            <td>Fee</td>
            <td>AN..32</td>
            <td>No</td>
            <td></td>
          </tr>
          <tr>
            <td>Order ID</td>
            <td>AN..32</td>
            <td>No</td>
            <td></td>
          </tr>
          <tr>
            <td>Code</td>
            <td>N3</td>
            <td>Yes</td>
            <td></td>
          </tr>
          <tr>
            <td>Order_Status</td>
            <td>A..32</td>
            <td>Yes</td>
            <td></td>
          </tr>
          <tr>
            <td>Timestamp</td>
            <td>AN25</td>
            <td>No</td>
            <td></td>
          </tr>
          <tr>
            <td>Success</td>
            <td>Boolean</td>
            <td>Yes</td>
            <td>True/false</td>
          </tr>
          <tr>
            <td>RRN</td>
            <td>AN..24</td>
            <td>No</td>
            <td></td>
          </tr>
          <tr>
            <td>Auth</td>
            <td>AN..24</td>
            <td>No</td>
            <td></td>
          </tr>
          <tr>
            <td>Currency</td>
            <td>N3</td>
            <td>No</td>
            <td></td>
          </tr>
          <tr>
            <td>Pan</td>
            <td>N..19</td>
            <td>No</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <table className="componentTable">
        <thead>
          <tr>
            <td>Status</td>
            <td>Order_Status</td>
            <td>Explanation</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0</td>
            <td>STARTED</td>
            <td>Order registered, but not paid.</td>
          </tr>
          <tr>
            <td>1</td>
            <td>APPROVED</td>
            <td>Transaction has been approved (for a one-phase payment).</td>
          </tr>
          <tr>
            <td>2</td>
            <td>DEPOSITED</td>
            <td>Amount was deposited successfully.</td>
          </tr>
          <tr>
            <td>3</td>
            <td>REVERSED</td>
            <td>Authorization has been reversed.</td>
          </tr>
          <tr>
            <td>4</td>
            <td>REFUNDED</td>
            <td>Transaction has been refunded.</td>
          </tr>
          <tr>
            <td>6</td>
            <td>DECLINED</td>
            <td>Authorization is declined.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StatusCheck;
