import React, { useEffect } from "react";
import "./checkThreedsVersionRequest.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function CheckThreedsVersionRequest({ CopyToClickBoard }) {
  useEffect(() => {
    CopyToClickBoard(
      "copyIcon4",
      "https://{base_url}/epg/rest/check3dsversion.do?username=apiuser&password=apiuserpassword&mdOrder= a2756f44-eb90-4649-9efc-c1047363e7d0&pan=5412346648811545&$CVC=000&$EXPIRY=0823&TEXT=CardholderName&ip=127.0.0.1&currency=978"
    );
  });

  return (
    <div id="checkthreeds" className="checkThreedsVersionRequest component">
      <h1 className="componentHeading">Check 3DS Version Request</h1>

      <div className="method">Method:</div>
      <div className="methodUrl">
        {"{base_url} epg/rest/check3dsversion.do"}
      </div>

      <div className="copyArea" id="copyArea5">
        <div className="copyAreaContainer">
          <div className="copyAreaHeading">Request example:</div>
          <div className="copyAreaUrl">
            {
              "https://{base_url}/epg/rest/check3dsversion.do?username=apiuser&password=apiuserpassword&mdOrder=a2756f44-eb90-4649-9efc-c1047363e7d0&pan=5412346648811545&$CVC=000&$EXPIRY=0823&TEXT=CardholderName&ip=127.0.0.1&currency=978"
            }
          </div>
        </div>
        <ContentCopyIcon sx={{ fontSize: 16 }}
          className="copyIcon"
          id="copyIcon4"
          fontSize="medium"
        />
      </div>
      <span id="copyIcon4Notification" className="notification">Copied</span>

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
              <td>mdOrder</td>
              <td>ANS36</td>
              <td>Yes</td>
              <td>Unique order number in the E- commerce Payment Gateway.</td>
            </tr>
            <tr>
              <td>pan</td>
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
                configured through the administrative portal UI, see EPG User
                Guide.
              </td>
            </tr>
            <tr>
              <td>$EXPIRY</td>
              <td>N..6</td>
              <td>Yes</td>
              <td>Year and month of the card</td>
            </tr>
            <tr>
              <td>TEXT</td>
              <td>AN..512</td>
              <td>Yes</td>
              <td>Cardholder name.</td>
            </tr>
            <tr>
              <td>ip</td>
              <td>AN..512</td>
              <td>Yes</td>
              <td>IP address</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="copyArea6" className="copyArea">
        <div className="copyAreaContainer">
          <div className="copyAreaHeading">Response example:</div>
          <div className="copyAreaUrl">
            {'{"errorCode":0,"errorMessage":"Success","error":false,"3ds":2}'}
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
              <td>
                Code of the error that occurred during the process of checking
                the 3ds protocol version. 0 - for successful check.
              </td>
            </tr>
            <tr>
              <td>errorMessage</td>
              <td>AN..512</td>
              <td>Yes</td>
              <td>
                Description of the error in the language that was sent in the
                language parameter of the request.
              </td>
            </tr>
            <tr>
              <td>methodUrl</td>
              <td>AN..512</td>
              <td>No</td>
              <td>
                ACS URL to which the{" "}
                <span className="text-bold">methodData</span> should be sent
              </td>
            </tr>
            <tr>
              <td>methodData</td>
              <td>AN..512</td>
              <td>No</td>
              <td>Base64 encoded information required by 3ds 2 protocol </td>
            </tr>
            <tr>
              <td>3ds</td>
              <td>N1</td>
              <td>Yes</td>
              <td>3DS version 2</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="componentParagraph">
        If the parameters <span className="text-bold">methodUrl </span>and
        <span className="text-bold"> methodData </span>are’nt empty, it is
        necessary to send <span className="text-bold">methodData </span>to the
        address <span className="text-bold">methodUrl </span>in the iframe
        embedded in the page as follows:
      </p>

      <div id="copyArea7" className="copyArea">
        <div className="copyAreaContainer">
          <div className="copyAreaUrl">
            {'<iframe name="iframe" style="display: none;" />'}
          </div>
          <div className="copyAreaUrl">
            {
              '<form action="{{ methodUrl }}" target="iframe" method="POST" style="display: "none";">'
            }
          </div>
          <div className="copyAreaUrl">
            {
              '<input type="hidden" name="threeDSMethodData" value="{{ methodData }}"/>'
            }
          </div>
          <div className="copyAreaUrl">{"</form>"}</div>
        </div>
      </div>
    </div>
  );
}

export default CheckThreedsVersionRequest;
