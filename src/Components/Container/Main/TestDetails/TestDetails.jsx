import React, { useEffect } from 'react'
import './testDetails.css'
import ContentCopyIcon from "@mui/icons-material/ContentCopy";


function TestDetails({ CopyToClickBoard }) {

    useEffect(() => {
        CopyToClickBoard("cardCopyIcon1", "53736110142213682");
        CopyToClickBoard("cardCopyIcon2", " 11/2024");
        CopyToClickBoard("cardCopyIcon3", "705");
        CopyToClickBoard("cardCopyIcon4", "5373612161093679");
        CopyToClickBoard("cardCopyIcon5", "07/26");
        CopyToClickBoard("cardCopyIcon6", "089");
        CopyToClickBoard("cardCopyIcon7", "5373612160518841");
        CopyToClickBoard("cardCopyIcon8", "07/2024");
        CopyToClickBoard("cardCopyIcon9", "491");
    });

    return (
        <div id='testDetails' className="component">
            <h1 className="componentHeading">Test Details</h1>
            <div className="method">Test card credentials</div>

            <p className="componentParagraph green">For success result, please use one of these cards:</p>

            <p className="copyParagraph">
                <span className="text-bold">PAN : 53736110142213682</span>

                <ContentCopyIcon sx={{ fontSize: 16 }}
                    className="copyIcon cardCopyIcon"
                    id="cardCopyIcon1"
                    fontSize="small"
                />
            </p>
            <span id="cardCopyIcon1Notification" className="notification">Copied</span>

            <p className="copyParagraph">
                <span className="text-bold">Exp.Date : 11/2024</span>

                <ContentCopyIcon sx={{ fontSize: 16 }}
                    className="copyIcon cardCopyIcon"
                    id="cardCopyIcon2"
                    fontSize="small"
                />
            </p>
            <span id="cardCopyIcon2Notification" className="notification">Copied</span>
            <p className="copyParagraph">
                <span className="text-bold">CVV : 705</span>

                <ContentCopyIcon sx={{ fontSize: 16 }}
                    className="copyIcon cardCopyIcon"
                    id="cardCopyIcon3"
                    fontSize="small"
                />
            </p>
            <span id="cardCopyIcon3Notification" className="notification">Copied</span>
            <p className="copyParagraph">
                <span className="text-bold">PAN : 5373612161093679</span>

                <ContentCopyIcon sx={{ fontSize: 16 }}
                    className="copyIcon cardCopyIcon"
                    id="cardCopyIcon4"
                    fontSize="small"
                />
            </p>
            <span id="cardCopyIcon4Notification" className="notification">Copied</span>
            <p className="copyParagraph">
                <span className="text-bold">Exp.Date : 07/26</span>

                <ContentCopyIcon sx={{ fontSize: 16 }}
                    className="copyIcon cardCopyIcon"
                    id="cardCopyIcon5"
                    fontSize="small"
                />
            </p>
            <span id="cardCopyIcon5Notification" className="notification">Copied</span>
            <p className="copyParagraph">
                <span className="text-bold">CVV : 089</span>

                <ContentCopyIcon sx={{ fontSize: 16 }}
                    className="copyIcon cardCopyIcon"
                    id="cardCopyIcon6"
                    fontSize="small"
                />
            </p>
            <span id="cardCopyIcon6Notification" className="notification">Copied</span>

            <p className="componentParagraph red">For unsuccess result, please use this card:</p>

            <p className="copyParagraph">
                <span className="text-bold">PAN : 5373612160518841</span>

                <ContentCopyIcon sx={{ fontSize: 16 }}
                    className="copyIcon cardCopyIcon"
                    id="cardCopyIcon7"
                    fontSize="small"
                />
            </p>
            <span id="cardCopyIcon7Notification" className="notification">Copied</span>
            <p className="copyParagraph">
                <span className="text-bold">Exp.Date : 07/2024</span>

                <ContentCopyIcon sx={{ fontSize: 16 }}
                    className="copyIcon cardCopyIcon"
                    id="cardCopyIcon8"
                    fontSize="small"
                />
            </p>
            <span id="cardCopyIcon8Notification" className="notification">Copied</span>
            <p className="copyParagraph">
                <span className="text-bold">CVV : 491</span>

                <ContentCopyIcon sx={{ fontSize: 16 }}
                    className="copyIcon cardCopyIcon"
                    id="cardCopyIcon9"
                    fontSize="small"
                />
            </p>
            <span id="cardCopyIcon9Notification" className="notification">Copied</span>

            <div id='testingParagraph1' className="componentParagraph">
                <div><img src={`${process.env.PUBLIC_URL}/assets/img/alert.png`} alt="alert" /></div>
                <p>At the ACS Page, to get <span id='greenText' > success </span> result, please enter OTP as “12345”</p>
            </div>
            <div id='testingParagraph2' className="componentParagraph">
                <div><img src={`${process.env.PUBLIC_URL}/assets/img/alert.png`} alt="alert" /></div>
                
                <p>If you enter an incorrect OTP at least <span className="redText">three</span> times, the transaction
                will result in failure and it will be declined</p>
            </div>

        </div>
    )
}

export default TestDetails