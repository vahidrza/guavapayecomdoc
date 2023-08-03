import React, { useEffect } from "react";
import "./statusCheck.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

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

      <div className="method">Method:</div>
      <div className="methodUrl">{"{base_url}/transaction/{code}/status"}</div>

      <div id="copyArea11" className="copyArea">
        <div className="copyAreaContainer">
          <div className="copyAreaHeading">Request example:</div>
          <div className="copyAreaUrl">
            {
              "https://{base_url}/transaction/013/status?user=apiuser&password=apiuserpassword&sid=900000&mdorder=eed077dc-cad0-4ed5-8a15-608ffc592173"
            }
          </div>
        </div>
        <ContentCopyIcon sx={{ fontSize: 16 }} className="copyIcon" id="copyIcon6" fontSize="small" />
      </div>
      <span id="copyIcon6Notification" className="notification">Copied</span>

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
            <tr>
              <td>sid</td>
              <td>ANS99</td>
              <td>Yes</td>
              <td>TerminalID</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="copyArea12" className="copyArea">
        <div className="copyAreaContainer">
          <div className="copyAreaHeading">Response example:</div>

          <div className="copyAreaUrl">
            {'{"Description": "Request processed successfully",'}
          </div>
          <div className="copyAreaUrl">"Amount": 50.0,</div>
          <div className="copyAreaUrl">"Fee": 1.0,</div>
          <div className="copyAreaUrl">
            "OrderId": "eed077dc-cad0-4ed5-8a15-608ffc592173",
          </div>
          <div className="copyAreaUrl">"Code": "0",</div>
          <div className="copyAreaUrl">
            "Timestamp": "2022-10-28 10:23:54.133177",
          </div>
          <div className="copyAreaUrl">"Success": true,</div>
          <div className="copyAreaUrl">"RRN": "000011341431",</div>
          <div className="copyAreaUrl">"Auth": "524269",</div>
          <div className="copyAreaUrl">"Currency": 978,</div>
          <div className="copyAreaUrl">"Pan": "500000**0000",</div>
          <div className="copyAreaUrl">"order_status": "2",</div>
          <div className="copyAreaUrl">{'"status": "DEPOSITED"}'}</div>
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
      </div>
      <div className="tableContainer">
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
    </div>
  );
}

export default StatusCheck;
