import React, { useEffect } from "react";
import "./orderRegistrationRequest.css";
import CopyAllIcon from "@mui/icons-material/CopyAll";

function OrderRegistrationRequest({ CopyToClickBoard }) {
  useEffect(() => {
    CopyToClickBoard(
      "copyIcon3",
      'https://{base_url}/epg/rest/register.do?userName=apiuser&password=apiuserpassword&currency=978&orderNumber=order_number&amount=100&language=en&returnUrl=URL/payment/cart.html&jsonParams={"request":"PAY","bank":"000","description":"PAY","sid":"900000"}'
    );
  });

  return (
    <div id="registerorder" className="orderRegistrationRequest">
      <h1 className="componentHeading">Order Registration Request</h1>
      <p className="componentParagraph">
        <span className="text-bold">{"Method: "}</span>
        <span className="text-url">{"{base_url} /epg/rest/register.do "}</span>
        <br />
        <br />
        <span className="text-bold">{"Request example: "}</span> <br />
        <span className="text-url">
          {
            "https://{base_url}/epg/rest/register.do?userName=apiuser&password=apiuserpassword&currency=978&orderNumber=order_number&amount="
          }
        </span>
        <br />
        <span className="text-url">
          {
            '100&language=en&returnUrl=URL/payment/cart.html&jsonParams={"request":"PAY","bank":"000","description":"PAY","sid":"900000'
          }
        </span>{" "}
        &nbsp;&nbsp;
        <CopyAllIcon className="copyIcon" id="copyIcon3" fontSize="medium" />
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
            <td>orderNumber</td>
            <td>AN..32</td>
            <td>Yes</td>
            <td>Identifier of the order in the merchant system.</td>
          </tr>
          <tr>
            <td>amount</td>
            <td>N..20</td>
            <td>Yes</td>
            <td>Order amount in the minor denomination (for example, cents)</td>
          </tr>
          <tr>
            <td>currency</td>
            <td>N3</td>
            <td>Yes</td>
            <td>Payment currency code in the ISO 4217 format</td>
          </tr>
          <tr>
            <td>language</td>
            <td>A2</td>
            <td>No</td>
            <td>
              Language code in the ISO 639-1 format. If unspecified, E-commerce
              Payment Gateway uses the default language from the merchant
              settings. Error messages are returned in this language.
            </td>
          </tr>
          <tr>
            <td>returnUrl</td>
            <td>AN..512</td>
            <td>Yes</td>
            <td>
              URL to which the customer is redirected after a successful
              payment.
            </td>
          </tr>
          <tr>
            <td>jsonParams[]</td>
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
          <tr>
            <td>description</td>
            <td>AN..512</td>
            <td>No</td>
            <td>Free form description of the order</td>
          </tr>
          <tr>
            <td>sessionTimeoutSecs</td>
            <td>N..9</td>
            <td>No</td>
            <td>
              Lifespan of the order, in seconds. The order lifespan duration can
              be taken from the following parameters (from the highest priority
              to the lowest):
              <br />-<span className="text-bold">sessionTimeoutSecs</span>{" "}
              transferred in a request. It overrides all other order timeout
              settings. <br />
              -If the <span className="text-bold">sessionTimeoutSecs</span>{" "}
              parameter is not specified, the default value from the merchant’s
              settings is used (the default value is 1200 seconds) .
              <br />
              -If the request contains the expirationDate parameter, the{" "}
              <span className="text-bold">sessionTimeoutSecs</span> parameter is
              ignored.
            </td>
          </tr>
          <tr>
            <td>expirationDate</td>
            <td>ANS</td>
            <td>No</td>
            <td>
              Date and time when the order is terminated. The following format
              is used: yyyy-MM-ddTHH:mm:ss . If this parameter is not specified,
              the
              <span className="text-bold">sessionTimeoutSecs</span> parameter is
              used to determine the date and time when the order is terminated.
            </td>
          </tr>
        </tbody>
      </table>
      <p className="componentParagraph">
        <br />
        <span className="text-bold">{"Response example:"}</span>
        <br />
        <span className="text-url">
          {
            '{"orderId":"a2756f44-eb90-4649-9efc-c1047363e7d0","formUrl":"https:// {base_url}/epg/merchants/Merchant/payment_en.html?mdOrder=a2756f44-eb90-4649-9efc-c1047363e7d0"}'
          }
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
            <td>formUrl</td>
            <td>AN..512</td>
            <td>No</td>
            <td>
              URL of the payment page to which the customer should be
              redirected. If the order registration has failed, this parameter
              is absent (the error is described in the ErrorCode field).
            </td>
          </tr>
          <tr>
            <td>errorCode</td>
            <td>N3</td>
            <td>No</td>
            <td>
              Response code: <br />
              -0 in the case of a successful transaction <br /> -Other code if
              an error occurred when processing the request
            </td>
          </tr>
          <tr>
            <td>errorMessage</td>
            <td>AN..512</td>
            <td>No</td>
            <td>
              Description of the error in the language that was sent in the
              language parameter of the request
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderRegistrationRequest;
