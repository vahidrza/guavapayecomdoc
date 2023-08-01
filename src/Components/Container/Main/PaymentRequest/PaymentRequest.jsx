import React, { useEffect } from "react";
import "./paymentRequest.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function PaymentRequest({ CopyToClickBoard }) {
  useEffect(() => {
    CopyToClickBoard(
      "copyIcon5",
      "https://{base_url}/epg/rest/paymentorder.do?userName=apiuser&password=apiuserpassword&MDORDERf3362f7a-8c8d-4be3-9a81-423e516d5364&$PAN=5412346648811545&$CVC=000&YYYY=2025&MM=08&TEXT=Cardgoldername&language=en&browserJavaScriptEnabled=true&browserLanguage=ru-RU&browserScreenHeight=986&browserScreenWidth=1024&browserTimeZone=0&browserJavaEnabled=true&browserScreenColorDepth=16&ip=127.0.0.1"
    );
  });

  return (
    <div id="payment" className="paymentRequest component">
      <h1 className="componentHeading">Payment Request</h1>
      <div className="method">Method:</div>
      <div className="methodUrl">{"{base_url}/epg/rest/paymentorder.do "}</div>

      <div className="copyArea" id="copyArea8">
        <div className="copyAreaContainer">
          <div className="copyAreaHeading">Request example:</div>
          <div className="copyAreaUrl">
            {
              "https://{base_url}/epg/rest/paymentorder.do?userName=apiuser&password=apiuserpassword&MDORDER=f3362f7a-8c8d-4be3-9a81-423e516d5364&$PAN=5412346648811545&$CVC=000&YYYY=2025&MM=08&TEXT=Cardgoldername&language=en&browserJavaScriptEnabled=true&browserLanguage=ru-RU&browserScreenHeight=986&browserScreenWidth=1024&browserTimeZone=0&=browserJavaEnabled=true&browserScreenColorDepth=16&ip=127.0.0.1"
            }
          </div>
        </div>
        <ContentCopyIcon className="copyIcon" id="copyIcon5" fontSize="small" />
      </div>

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
              <td>MDORDER</td>
              <td>ANS36</td>
              <td>Yes</td>
              <td>Unique order number in the E- commerce Payment Gateway.</td>
            </tr>
            <tr>
              <td>$PAN</td>
              <td>N..20</td>
              <td>Yes</td>
              <td>Card number</td>
            </tr>
            <tr>
              <td>$CVC</td>
              <td>N..3</td>
              <td>Yes / No</td>
              <td>
                Card Verification Code (CVC). Note: If the Can pay by binding
                without CVV2/CVC2 and Can pay by card without CVV2/CVC2 options
                are enabled for the merchant, this parameter is optional for
                payments that use the respective payment method. The options are
                configured through the administrative portal UI.
              </td>
            </tr>
            <tr>
              <td>YYYY</td>
              <td>N..4</td>
              <td>Yes</td>
              <td>Year when the card expires</td>
            </tr>
            <tr>
              <td>MM</td>
              <td>N..2</td>
              <td>Yes</td>
              <td>Month when the card expires</td>
            </tr>
            <tr>
              <td>TEXT</td>
              <td>AN..512</td>
              <td>No</td>
              <td>Cardholder name.</td>
            </tr>
            <tr>
              <td>language</td>
              <td>A..2</td>
              <td>Yes</td>
              <td>
                Language of the information (or error) message that is to be
                sent in a response to this request.
              </td>
            </tr>
            <tr>
              <td>browserJavaScriptEnabled</td>
              <td>boolean</td>
              <td>Yes for 3ds=2</td>
              <td>
                Parameter that specifies whether supporting JavaScript is
                enabled for the cardholder’s browser.The possible values are:
                <ul className="tableList">
                  <li>true</li>
                  <li>false</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>browserLanguage</td>
              <td>AN..512</td>
              <td>Yes for 3ds=2</td>
              <td>Language of the cardholder’s browser.</td>
            </tr>
            <tr>
              <td>browserScreenHeight</td>
              <td>AN..512</td>
              <td>Yes for 3ds=2</td>
              <td>Height of the cardholder’s device screen.</td>
            </tr>
            <tr>
              <td>browserScreenWidth</td>
              <td>AN..512</td>
              <td>Yes for 3ds=2</td>
              <td>Width of the cardholder’s device screen.</td>
            </tr>
            <tr>
              <td>browserTimeZone</td>
              <td>AN..512</td>
              <td>Yes for 3ds=2</td>
              <td>Time zone of the cardholder’s browser.</td>
            </tr>
            <tr>
              <td>browserTimeZoneOffset</td>
              <td>N..3</td>
              <td>No</td>
              <td>
                Difference between UTC time and the cardholder’s browser local
                time, in minutes.
              </td>
            </tr>
            <tr>
              <td>browserJavaEnabled</td>
              <td>boolean</td>
              <td>Yes for 3ds=2</td>
              <td>
                Parameter that specifies whether supporting Java is enabled for
                the cardholder’s browser.The possible values are:
                <ul className="tableList">
                  <li>true</li>
                  <li>false</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>browserScreenColorDepth</td>
              <td>AN..512</td>
              <td>Yes for 3ds=2</td>
              <td>
                Bit depth of the color palette for displaying images on the
                screen of the cardholder’s device.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="copyArea9" className="copyArea">
        <div className="copyAreaContainer">
          <div className="copyAreaHeading">Response example:</div>
          <div className="copyAreaUrl">
            {
              '{"info":"Your order is proceeded,redirecting...","acsUrl":"https://acs.test.com/acs/api/3ds2/creqbrw","cReq":"eyJ0aHJlZURTU2VydmVyVHJhbnNJR{"CI6IjUyZmFjZjA5LTVlZGMtNDkwNC05MTEzLTFjMDljMjBkM2JjNCIsImFjc1RyYW5zSUQiOiJjMDJiZTI0OS0zNzdkLTRhMTYtYmRlMC1jMjEwOTRmMDExNzEiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0=","errorCode":0}'
            }
          </div>
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
              <td>errorCode</td>
              <td>N1</td>
              <td>Yes</td>
              <td>Code of error</td>
            </tr>
            <tr>
              <td>errorMessage</td>
              <td>AN..512</td>
              <td>No</td>
              <td>Message of request</td>
            </tr>
            <tr>
              <td>info</td>
              <td>AN..512</td>
              <td>No</td>
              <td>
                Result of the payment attempt. Possible values:
                <ul className="tableList">
                  <li>Your order is proceeded, redirecting...</li>
                  <li>
                    Operation declined. Please check the data and available
                    balance of the card. Redirecting...
                  </li>
                  <li>Sorry, payment cannot be completed. Redirecting...</li>
                  <li>
                    Payment declined. Please, contact the merchant.
                    Redirecting...
                  </li>
                  <li>
                    Payment declined. Please, contact the merchant.
                    Redirecting...
                  </li>
                  <li>
                    Payment declined. Please, contact your bank. Redirecting...
                  </li>
                  <li>
                    Payment declined. Please, contact your bank. Redirecting...
                  </li>
                  <li>
                    Cannot connect to your bank. Please, contact your bank.
                    Redirecting...
                  </li>
                  <li>
                    Processing timeout. Please, try again later. Redirecting...
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>redirect</td>
              <td>AN..512</td>
              <td>No</td>
              <td>
                URL to which the customer is redirected after executing the
                payment, depending on the payment result.
              </td>
            </tr>
            <tr>
              <td>acsUrl</td>
              <td>AN..512</td>
              <td>No</td>
              <td>
                URL of the ACS server. This parameter is not used in payments
                that do not require additional authentication on the issuing
                bank’s ACS.
              </td>
            </tr>
            <tr>
              <td>termUrl</td>
              <td>AN..512</td>
              <td>No (3ds=1)</td>
              <td>
                Return address from ACS for the customer to complete the
                payment. This parameter is not used in payments that do not
                require additional authentication on the issuing bank’s ACS.
              </td>
            </tr>
            <tr>
              <td>paReq</td>
              <td>AN..512</td>
              <td>No (3ds=1)</td>
              <td>
                Payer Authentication Request, a message sent from the MPI to ACS
                via the cardholder device. PAReq requests the issuer to
                authenticate its cardholder and contains the cardholder,
                merchant, and transaction-specific information necessary to
                perform authentication. It is used in 3-D Secure 1. This
                parameter is not used in payments that do not require additional
                authentication on the issuing bank ACS.
              </td>
            </tr>
            <tr>
              <td>md</td>
              <td>ANS36</td>
              <td>No (3ds=1)</td>
              <td>
                Merchant Data: merchant state data that must be returned to the
                merchant from ACS.
              </td>
            </tr>
            <tr>
              <td>cReq</td>
              <td>AN..512</td>
              <td>No (3ds 2)</td>
              <td>
                Challenge Request message. EMV 3-D Secure message sent by the
                3DS SDK or 3DS Server where additional information is sent from
                the cardholder to the ACS to support the authentication process.
                It must be present for 3-D Secure 2 if a cardholder challenge is
                required.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="componentParagraph">
        If <span className="text-bold">3-D Secure</span> is required to perform
        a payment, then after the response to the payment request has been
        received, the merchant must redirect the customer to{" "}
        <span className="text-bold">ACS</span>.
      </p>
      <p className="componentParagraph">
        To redirect the customer to <span className="text-bold">ACS</span>, the
        merchant must perform redirection to the address specified in the acsUrl
        parameter with the body of the request.
      </p>
      <p className="componentParagraph">
        The request must be in the <span className="text-bold">POST</span>{" "}
        format.
      </p>
      <p className="componentParagraph componentParagraphNotBottomMargin">
        Depending on the integration scheme, after passing the authentication on{" "}
        <span className="text-bold">ACS</span>, the customer is redirected to
        the merchant or to E-commerce Payment Gateway. The processes of payment
        completion for each of these cases are listed below.
      </p>
      <p className="componentParagraph componentParagraphNotBottomMargin">
        For 3ds version 2 :
      </p>

      <div id="copyArea10" className="copyArea">
        <div className="copyAreaContainer">
          <div className="copyAreaUrl">
            {'<form name="data" method="POST" action="{{ acsUrl }}">'}
          </div>
          <div className="copyAreaUrl">
            {'<input type="hidden" name="creq" value="{{ cReq }}">'}
          </div>
          <div className="copyAreaUrl">{"</form>"}</div>
        </div>
      </div>
    </div>
  );
}

export default PaymentRequest;
