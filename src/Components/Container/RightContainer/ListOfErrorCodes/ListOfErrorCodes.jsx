import React from "react";
import "./listOfErrorCodes.css";

function ListOfErrorCodes() {
  return (
    <div id="errorcodes" className="listOfErrorCodes">
      <h1 className="componentHeading">List of Error Codes</h1>
      <br />
      <br />
      <br />
      <table className="componentTable">
        <thead>
          <tr>
            <td>CODE</td>
            <td>NAME</td>
            <td>RESULT_TYPE</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-20010</td>
            <td>BLOCKED BY LIMIT</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-3003</td>
            <td>Response status unknown </td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2021</td>
            <td>SSL IMPOSSIBLE</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2020</td>
            <td>Invalid ECI received</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2019</td>
            <td>
              3DS v.1 Authentication is’t possible. Decline by iReq in PARes
            </td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2018</td>
            <td>
              3DS v.1 Authentication is’t possible. Declined. DS connection
              timeout
            </td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2017</td>
            <td>
              3DS v.1 Authentication is’t possible. Declined. PARes status is
              not Y
            </td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2016</td>
            <td>
              3DS v.1 Authentication is’t possible. VERes status is
              &quot;U&quot;
            </td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2015</td>
            <td>
              3DS v.1 Authentication is’t possible. Decline by iReq in VERes
            </td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2013</td>
            <td>No attempts left</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2007</td>
            <td>Session time limit</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2006</td>
            <td>3DS Authentication is’t possible.</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2005</td>
            <td>TDS SIGNATURE TEST FAILED</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-2002</td>
            <td>TDS IMPOSSIBLE</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>-100</td>
            <td>No payment attempted yet.</td>
            <td>SUCCESS</td>
          </tr>

          <tr>
            <td>0</td>
            <td>Request processed successfully</td>
            <td>SUCCESS</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Invalid merchant</td>
            <td>ERROR</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Do Not Honour by Fraud/Do Not Honour</td>
            <td>ERROR</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Declined by Fraud Rules</td>
            <td>ERROR</td>
          </tr>
          <tr>
            <td>76</td>
            <td>Original transaction not found</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>100</td>
            <td>Card limits exceeded.</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>101</td>
            <td>Wrong expiry date.</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>103</td>
            <td>Contact issuer.</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>109</td>
            <td>Wrong merchant id/terminal id</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>110</td>
            <td>INVALID_AMOUNT</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>111</td>
            <td>Decline. Wrong PAN</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>116</td>
            <td>Not enough money.</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>119</td>
            <td>Security violation.</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>120</td>
            <td>Transaction was refused.</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>121</td>
            <td>Limit reached.</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>125</td>
            <td>Invalid card number.</td>
            <td>ERROR</td>
          </tr>
          <tr>
            <td>301</td>
            <td>Redirect to UPI SecurePay</td>
            <td></td>
          </tr>

          <tr>
            <td>903</td>
            <td>Reenter transaction.</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>904</td>
            <td>Invalid message format</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>910</td>
            <td>Cannot contact bank.</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>914</td>
            <td>Original transaction not found</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>2002</td>
            <td>Invalid operation</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>2003</td>
            <td>SSL FORBIDDEN</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>2004</td>
            <td>SSL without CVC forbidden</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>2005</td>
            <td>3DS rule failed</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>2009</td>
            <td>Refund more than deposited error</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>2014</td>
            <td>3DS rule error</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>2015</td>
            <td>Terminal select rule error</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>8204</td>
            <td>Duplicate order</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>151018</td>
            <td>CANNOT SEND REQUEST</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>341014</td>
            <td>GENERAL ERROR</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>341016</td>
            <td>
              3DS2 authentication is declined by Authentication Response (ARes)
            </td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>341017</td>
            <td>3DS2 authentication status in ARes is unknown</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>341018</td>
            <td>3DS2 authentication cancelled</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>341019</td>
            <td>3DS2 authentication failed</td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>341020</td>
            <td>3DS2 unknown status in RReq</td>
            <td>ERROR</td>
          </tr>
          <tr>
            <td>341022</td>
            <td>3DS2 authentication. Challenge was erroneous</td>
            <td>ERROR</td>
          </tr>
          <tr>
            <td>341023</td>
            <td>
              3DS2 authentication. ACS cancelled challenge by timeout - ACS
              Timeout
            </td>
            <td>ERROR</td>
          </tr>

          <tr>
            <td>342015</td>
            <td>
              Operation canceled due to unsuccessful postal address verification
            </td>
            <td>ERROR</td>
          </tr>
        </tbody>
      </table>
      <p className="componentParagraph">
        <br />
        <br />
        <span className="text-bold">{"E-COM FRAUD RULES:"}</span>
        <br />
        In case of 3 unsuccessful transactions within 24 hours (operational
        day), depending on the error code, the card will be blocked for (forever
        / 24 hours ). Also, the interval between operations should be at least
        30 seconds. You will receive in response to a status request: 05: do not
        honor by fraud. <br />
        For successful transactions:
      </p>
      <span className="componentParagraph">
        <ul>
          <li>
            <span className="text-url">
              - 5 transactions per day on the card. Daily limit on 1 card - 2000
              EUR
            </span>
          </li>
          <li>
            <span className="text-url">
              - 10 transactions per week. 5000 EUR per week
            </span>
          </li>
          <li>
            <span className="text-url">
              - 16 transactions per month. 10000 EUR per month{" "}
            </span>
          </li>
        </ul>
        After the card will not be able to conduct transactions.
        <br />
        <br />
      </span>
      <p className="componentParagraph">
        <span className="text-bold">
          {"List of ERROR CODES with block duration designations:"}
        </span>
      </p>
      <br />
      <table className="componentTable">
        <thead>
          <tr>
            <td>Response code</td>
            <td>Response Message</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>103</td>
            <td>Contact issuer. &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>109</td>
            <td>Wrong merchant id/terminal id &#8211; 3 then block 24 hours</td>
          </tr>
          <tr>
            <td>125</td>
            <td>Invalid card number. &#8211; block forever</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Do not honor transaction . &#8211; block 24 hour</td>
          </tr>
          <tr>
            <td>903</td>
            <td>Reenter transaction. &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>110</td>
            <td>INVALID_AMOUNT &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>111</td>
            <td>Decline. Wrong PAN. &#8211; block forever</td>
          </tr>
          <tr>
            <td>904</td>
            <td>Invalid message format . &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>910</td>
            <td>Cannot contact bank. . &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>101</td>
            <td>Wrong expiry date. . &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>119</td>
            <td>Security violation. &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>116</td>
            <td>Not enough money. . &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>120</td>
            <td>Transaction was refused. . &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>100</td>
            <td>Card limits exceeded. . &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>121</td>
            <td>Limit reached. . &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>106</td>
            <td>
              PIN attempts exceeded. Card is blocked. . &#8211; block forever
            </td>
          </tr>
          <tr>
            <td>914</td>
            <td>Original transaction not found&#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-3003</td>
            <td>Response status unknown&#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2018</td>
            <td>
              Declined. DS connection timeout &#8211; 3 then block 24 hour{" "}
            </td>
          </tr>
          <tr>
            <td>8204</td>
            <td>Duplicate order&#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>2009</td>
            <td>
              Refund more than deposited error&#8211; 3 then block 24 hour
            </td>
          </tr>
          <tr>
            <td>76</td>
            <td>Original transaction not found&#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2002</td>
            <td>TDS_IMPOSSIBLE &#8211;3 then block 24 hour </td>
          </tr>
          <tr>
            <td>-2021</td>
            <td>SSL_IMPOSSIBLE &#8211;3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2020</td>
            <td>Invalid ECI received &#8211;3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2019</td>
            <td>Decline by iReq in PARes &#8211;3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2018</td>
            <td>Declined. DS connection timeout&#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2017</td>
            <td>Declined. PARes status is not Y&#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2016</td>
            <td>VERes status is &quot;U&quot;&#8211;3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2015</td>
            <td>Decline by iReq in VERes &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2013</td>
            <td>No attempts left &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2007</td>
            <td>Session time limit &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2006</td>
            <td>TDS_AUTH_FAILED &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>-2005</td>
            <td>TDS_SIGNATURE_TEST_FAILED &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>999</td>
            <td>Trasaction refused by fraud. &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>2002</td>
            <td>Invalid operation &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>2003</td>
            <td>SSL_FORBIDDEN &#8211; 3 then block 24 hour</td>
          </tr>

          <tr>
            <td>2004</td>
            <td>SSL without CVC forbidden &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>2005</td>
            <td>3DS rule failed &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>2014</td>
            <td>3DS rule error &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>2015</td>
            <td>Terminal select rule error &#8211; 3 then block 24 hour</td>
          </tr>
          <tr>
            <td>151018</td>
            <td>CANNOT_SEND_REQUEST &#8211; 3 then block 24 hour</td>
          </tr>

          <tr>
            <td>341014</td>
            <td>GENERAL_ERROR &#8211; 3 then block 24 hour</td>
          </tr>

          <tr>
            <td>341016</td>
            <td>
              3DS2 authentication is declined by Authentication Response (ARes)
              &#8211; 3 then block 24 hour
            </td>
          </tr>

          <tr>
            <td>341017</td>
            <td>
              3DS2 authentication status in ARes is unknown &#8211; 3 then block
              24 hour
            </td>
          </tr>

          <tr>
            <td>341018</td>
            <td>3DS2 authentication cancelled &#8211; 3 then block 24 hour</td>
          </tr>

          <tr>
            <td>341019</td>
            <td>3DS2 authentication failed &#8211; 3 then block 24 hour</td>
          </tr>

          <tr>
            <td>341020</td>
            <td>3DS2 unknown status in RReq &#8211; 3 then block 24 hour</td>
          </tr>

          <tr>
            <td>342015</td>
            <td>
              Operation canceled due to unsuccessful postal address
              verification. &#8211; 3 then block 24 hour
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListOfErrorCodes;
