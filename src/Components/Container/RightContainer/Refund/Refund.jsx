import React from "react";
import "./refund.css";

function Refund() {
  return (
    <div id="refund" className="refund">
      <h1 className="componentHeading">Refund</h1>
      <p className="componentParagraph">
        <span className="text-bold">{"Method: "}</span>
        <span className="text-url">{"{base_url}/epg/rest/refund.do "}</span>
        <br />
        <br />A <span className="text-bold">refund.do</span> request is used to
        refund deposited money. This request returns the funds paid for the
        order back to the customer. <br /> The request results in an error if
        the customer was not charged. Under NDA only the request allows multiple
        refunds, but their total
        <br /> amount cannot exceed the amount that was deposited from the
        customer’s account as a result of the order.
        <br />
        <br />
        A merchant’s user must have a corresponding permission in the system to
        perform a refund request.
        <br />
        <br />
        <span className="text-bold">{"Request parameters:"}</span>
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
            <td>
              Unique order number in the E- commerce Payment Gateway. It is
              absent if the order registration has failed (the error is
              described in the ErrorCode field)
            </td>
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
              follows: <br />{" "}
              <span>
                {
                  '{"param":"value","param2":"value2"} . bank – Will be provided during integration.'
                }
              </span>{" "}
              <br />
              request – ‘PAY’ . <br />
              description – Free text . <br />
              sid - Will be provided during integration.
            </td>
          </tr>
        </tbody>
      </table>
      <p className="componentParagraph">
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
            <td>errorCode</td>
            <td>N1</td>
            <td>Yes</td>
            <td>
              Code of the error that occurred during the process of checking the
              3ds protocol version. 0 for successful check.
            </td>
          </tr>
          <tr>
            <td>errorMessage</td>
            <td>AN..512</td>
            <td>No</td>
            <td>Message of request</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Refund;
