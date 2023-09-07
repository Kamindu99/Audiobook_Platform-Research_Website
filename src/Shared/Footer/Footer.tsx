import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
        <div className='myfootecss'>
            <div className=" mt-5">
                <div className="card ">
                    <div className="row mb-4">
                        <div className="col-md-4 col-sm-4 col-xs-4">
                            <div className="footer-text pull-left">
                                <div className="d-flex">
                                    <h1 className="font-weight-bold me-2 px-3" style={{ color: "white", backgroundColor: "#8ca3ba" }}> L </h1>
                                    <h2 style={{ color: "#8ca3ba" }}>ListenEd</h2>
                                </div>
                                <p className="card-text">
                                    The main objective of the proposed voice-controlled audio
                                    book system is to provide visually impaired university students in Sri Lanka
                                </p>
                                <div className="social mt-2 mb-3">
                                    <i className="fa fa-facebook-official fa-lg" onClick={() => { window.location.replace("https://www.facebook.com/profile.php?id=100007444869672&mibextid=LQQJ4d") }}></i>
                                    <i className="fa fa-instagram fa-lg" onClick={() => { window.location.replace("https://instagram.com/k_a_m_i_n_d_u_") }}></i>
                                    <i className="fa fa-twitter fa-lg" onClick={() => { window.location.replace("https://twitter.com/k_a_m_i_n_d_u_") }}></i>
                                    <i className="fa fa-linkedin-square fa-lg" onClick={() => { window.location.replace("https://www.linkedin.com/in/kamindu-gayantha-4693661b5") }}></i>
                                    <i className="fa fa-github" onClick={() => { window.location.replace("https://github.com/Kamindu99") }}></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2"></div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Tools</h5>
                            <ul>
                                <li>Python</li>
                                <li>React Js</li>
                                <li>GitHub</li>
                                <li>Dijango</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Downloads</h5>
                            <ul className="card-text">
                                <li>Project Proposal</li>
                                <li>Project Charter</li>
                                <li>Log Book</li>
                                <li>Final Report</li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-2 col-xs-2">
                            <h5 className="heading">Contact Us</h5>
                            <ul className="card-text">
                                <li>SLIIT</li>
                                <li>Malabe</li>
                                <li>Kaduwela</li>
                                <li>071 5273881</li>
                            </ul>
                        </div>
                    </div>
                    <div className="divider mb-4"> </div>
                    <div className="row" style={{ fontSize: "10px", textAlign: "center" }}>
                        <div>
                            Designed and Developed by SLIIT <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;