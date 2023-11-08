import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Container from '../Container/Container'
import ContainerWeb from '../ContainerWeb/ContainerWeb'
import "./webApi.css";

function WebApi() {

    const Home = () => {
        return (
            <>
                {/* <button><Link to="/web">WEB</Link></button>
                <button><Link to="/api">API</Link></button> */}
                <div className="webApiContainer">
                    <p>Please select</p>
                    <div className="webApiChanges">
                        <div className="webApiChangesChange">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/webDocs.svg`} alt="Web Docs" />
                            <p>Web Docs</p>
                            <p className='description' >Specification</p>
                            <button className='webApiChangesChangeButton' ><Link to="/web">Proceed</Link></button>
                        </div>
                        <div className="webApiChangesChange">
                            <img src={`${process.env.PUBLIC_URL}/assets/img/apiDocs.svg`} alt="Api Docs" />
                            <p>API Docs</p>
                            <p className='description' >Specification</p>
                            <button className='webApiChangesChangeButton' ><Link to="/api">Proceed</Link></button>
                        </div>
                    </div> 
                </div>
            </>
        )
    }
    return (
        <div id='webApi' >
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/web" element={<ContainerWeb />} />
                    <Route path="/api" element={<Container />} />
                </Routes>
            </Router>
        </div>
    )
}

export default WebApi