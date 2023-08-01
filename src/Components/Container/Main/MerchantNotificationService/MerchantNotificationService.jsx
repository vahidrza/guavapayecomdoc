import React, { useEffect } from "react";
import "./merchantNotificationService.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function MerchantNotificationService({ CopyToClickBoard }) {
  useEffect(() => {
    CopyToClickBoard(
      "copyIcon8",
      "status=CREATED&description=No payment attempted yet.&amount=0.00&fee=0.00&orderId=5d696a3b-afb0-4111-b201-ea00bc68c862&code=-100&orderStatus=0&timestamp=2022-11-10 01:14:20&success=false&rrn&auth=-&currency=978&pan=&orderNumber=2022111021419470"
    );
  });

  return (
    <div id="notification" className="merchantNotificationService component">
      <h1 className="componentHeading">
        Merchant Notification Service(Call Back)
      </h1>
      <p className="componentParagraph">
        The notification service sends a message in{" "}
        <span className="text-bold">JSON</span> format using a{" "}
        <span className="text-bold">TLS</span> protocol to the merchant
        specified <span className="text-bold">URL</span> of the service with{" "}
        <span className="text-bold">POST</span> method.
      </p>

      <div className="method">Signature verification:</div>
      <p className="componentParagraph">Encoding UTF-8.</p>

      <ol className="callbackList">
        <li>
          <div className="componentParagraph ">
            To prepare a message for signature verification create a string to
            calculate SHA256 hash value. To do this, connect all the fields of
            the message except the signature field as the key=value of the pair
            with the separator ‘&’. Field names of the message are in
            lexicographical order. Example:
          </div>
        </li>

        <div id="copyArea15" className="copyArea ">
          <div className="copyAreaContainer">
            <div className="copyAreaUrl">
              status=CREATED&description=No payment attempted
              yet.&amount=0.00&fee=0.00&orderId=5d696a3b-afb0-4111-b201-ea00bc68c862&code=-100&orderStatus=0&timestamp=2022-11-10
              01:14:20&success=false&rrn&auth=-&currency=978&pan=&orderNumber=2022111021419470
            </div>
          </div>
          <ContentCopyIcon sx={{ fontSize: 16 }}
            className="copyIcon"
            id="copyIcon8"
            fontSize="small"
          />
        </div>
        <li>
          <div className="componentParagraph componentParagraphNotBottomMargin">
            Calculate SHA256 hash from string and conduct a hexadecimal
            conversion after that.
          </div>
        </li>
        <li>
          <div className="componentParagraph componentParagraphNotBottomMargin">
            Decode received signature field of message from Base64.
          </div>
        </li>
        <li>
          <div className="componentParagraph">
            Verify signature using a certificate public key.
          </div>
        </li>
      </ol>

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
              <td>description</td>
              <td>ANS..100</td>
              <td>Yes</td>
              <td>Free form description of the order error.</td>
            </tr>
            <tr>
              <td>amount</td>
              <td>N..12</td>
              <td>Yes</td>
              <td>
                Amount to be debited in the order currency. The amount can be
                less or equal to the preauthorization amount.
              </td>
            </tr>
            <tr>
              <td>fee</td>
              <td>N..9</td>
              <td>Yes</td>
              <td>Fee amount</td>
            </tr>
            <tr>
              <td>orderId</td>
              <td>AN..30</td>
              <td>Yes</td>
              <td>
                Order number generated by EPG after the registration of the
                order (the same as the{" "}
                <span className="text-bold"> mdOrder</span> parameter).
              </td>
            </tr>
            <tr>
              <td>code</td>
              <td>N1..6</td>
              <td>Yes</td>
              <td>Error code or 0 - if order paid successfully.</td>
            </tr>
            <tr>
              <td>timestamp</td>
              <td>ANS</td>
              <td>Yes</td>
              <td>Date and time of order payment.</td>
            </tr>
            <tr>
              <td>success</td>
              <td>Boolean</td>
              <td>Yes</td>
              <td></td>
            </tr>
            <tr>
              <td>rrn</td>
              <td>AN..24</td>
              <td>No</td>
              <td>Reference number. It is specified only for paid orders.</td>
            </tr>
            <tr>
              <td>auth</td>
              <td>AN6</td>
              <td>No</td>
              <td>
                Payments network authorization code. The field has a fixed
                length of six characters; it can contain both numbers and
                letters. It is specified only for paid orders.
              </td>
            </tr>
            <tr>
              <td>currency</td>
              <td>N3</td>
              <td>Yes</td>
              <td>Payment currency in the ISO 4217 format.</td>
            </tr>
            <tr>
              <td>pan</td>
              <td>N 12...19</td>
              <td>No</td>
              <td>
                Masked number of the card that has been used for the payment.{" "}
              </td>
            </tr>
            <tr>
              <td>orderNumber</td>
              <td>AN 1..32</td>
              <td>Yes</td>
              <td>
                Number (identifier) of the order in the merchant’s online store
                system. It is unique for every store in the system.
              </td>
            </tr>
            <tr>
              <td>status</td>
              <td>AN..80</td>
              <td>Yes</td>
              <td>Order status</td>
            </tr>
            <tr>
              <td>signature</td>
              <td>ANS..512</td>
              <td>Yes</td>
              <td>Base64 encoded hash signed by “SHA256withRSA” algorithm.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div id="copyArea16" className="copyArea">
        <div className="copyAreaContainer">
          <div className="copyAreaHeading">Response example:</div>
          <div className="copyAreaUrl">{"{"}</div>
          <div className="copyAreaUrl">{'"status":"CREATED",'}</div>
          <div className="copyAreaUrl">
            {'"description":"No payment attempted yet.",'}
          </div>
          <div className="copyAreaUrl">{'"amount":"0.00",'}</div>
          <div className="copyAreaUrl">{'"fee":"0.00",'}</div>
          <div className="copyAreaUrl">
            {'"orderId":"409082c1-5380-4f07-b5b3-f52ee159041c",'}
          </div>
          <div className="copyAreaUrl">{'"code":"-100",'}</div>
          <div className="copyAreaUrl">{'"orderStatus":"0",'}</div>
          <div className="copyAreaUrl">
            {'"timestamp":"2022-11-10 00:45:15",'}
          </div>
          <div className="copyAreaUrl">{'"success":false,'}</div>
          <div className="copyAreaUrl">{'"rrn":null,'}</div>
          <div className="copyAreaUrl">{'"auth":"-",'}</div>
          <div className="copyAreaUrl">{'"currency":"978",'}</div>
          <div className="copyAreaUrl">{'"pan":"",'}</div>
          <div className="copyAreaUrl">
            {'"orderNumber":"2022111014514158",'}
          </div>
          <div className="copyAreaUrl">
            {
              '"signature":"LFYgBrBrA6v7he1l4jUgnTT2kRgMsqEYzLqEeu9zUZGMptpHmxpqz3GLR6EkkgDt8Hc0cvvH9oi/x53MnAcYGQWfw4eF7AqGbFa0TDATppL8q33xUXsuEJiqWWvK6ox6FRiiNbNvl52VPffPz1TWnZdcGHIZzfRLpPje/9P1wnEsiaZgX1NQsKASEDdCJ3UZ7NruMzfPrpcq8el4kpdkMRAh59ETLVw/kuRpPof+yx12ISQuOiqsXUT5Lx009xVLEoOSnt7CMw3TnA64gezJfhTob91Shykw//8Ypj2+WoiJGaixikF0H0GEfsjRBFojy8OKdxBwWM5ntgX/NWBGRw=="'
            }
          </div>
          <div className="copyAreaUrl">{"}"}</div>
        </div>
      </div>
    </div>
  );
}

export default MerchantNotificationService;
