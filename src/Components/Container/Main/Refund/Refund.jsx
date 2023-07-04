import React from "react";
import "./refund.css";

function Refund() {
  return (
    <div id="refund" className="refund component">
      <h1 className="componentHeading">Refund</h1>

      <div className="text-bold-free">
        Method:
        <span className="text-url">{"{base_url}/epg/rest/refund.do"}</span>
      </div>

      <p className="componentParagraph">
        A <span className="text-bold">refund.do</span> request is used to refund
        deposited money.
      </p>
      <p className="componentParagraph">
        This request returns the funds paid for the order back to the customer.
        The request results in an error if the customer was not charged. Under
        NDA only the request allows multiple refunds, but their total amount
        cannot exceed the amount that was deposited from the customer’s account
        as a result of the order.
      </p>
      <p className="componentParagraph">
        A merchant’s user must have a corresponding permission in the system to
        perform a refund request.
      </p>
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
            <td>userName</td>
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
            <td>orderId</td>
            <td>ANS36</td>
            <td>No</td>
            <td>Unique order number in the E- commerce Payment Gateway.</td>
          </tr>
          <tr>
            <td>amount</td>
            <td>N..20</td>
            <td>Yes</td>
            <td>Order amount in the minor denomination (for example, cents)</td>
          </tr>
          <tr>
            <td>jsonParams</td>
            <td>AN..1024</td>
            <td>Yes</td>
            <td>
              Fields used to store additional information. The type is as
              follows:
              <ul className="tableList">
                <li>{'{"param":"value","param2":"value2"} ; '}</li>
                <li>bank – Will be provided during integration;</li>
                <li>request – ‘PAY’;</li>
                <li>description – Free text;</li>
                <li>sid - Will be provided during integration.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="componentParagraph">
        <span className="text-bold-free">{"Response parameters:"}</span>
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
            <td>errorCode</td>
            <td>N1</td>
            <td>Yes</td>
            <td>
              Response code:
              <ul className="tableList">
                <li>0 - for successful check.</li>
                <li>Other code - if an error occurred when processing the</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>errorMessage</td>
            <td>AN..512</td>
            <td>No</td>
            <td>
              Information message about the transaction result: a success
              message or the description of an error.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Refund;
