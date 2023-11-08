import React from 'react'
import './noDesktop.css'

function NoDesktop() {
    return (
        <div className='noDesktop' >
            <div className="logoContainer">
                <img src={`${process.env.PUBLIC_URL}/assets/img/logo.svg`}
                    alt="logo" />
            </div>

            <div className="noDesktopMainContainer">
                <img src={`${process.env.PUBLIC_URL}/assets/img/noDesktopPhoto.svg`}
                    alt="logo" />
            </div>

            <div className="noDesktopParagraph">
                <p>For a better experience,</p>
                <p>please use desktop version </p>
            </div>

            <div className="background"></div>
        </div>
    )
}

export default NoDesktop