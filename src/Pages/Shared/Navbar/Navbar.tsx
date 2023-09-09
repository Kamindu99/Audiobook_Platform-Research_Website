import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 99) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])

    const [isHome, setIsHome] = useState(false)
    const [isProjectScope, setIsProjectScope] = useState(false)
    const [ismilestones, setIsmilestones] = useState(false)
    const [isDownloads, setIsDownloads] = useState(false)
    const [isAboutUs, setIsAboutUs] = useState(false)
    const [isContactUs, setIsContactUs] = useState(false)

    function activeSection(path: any) {
        if (path === 'home') {
            setIsHome(true)
            setIsProjectScope(false)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsAboutUs(false)
            setIsContactUs(false)
        } else if (path === 'ProjectScope') {
            setIsHome(false)
            setIsProjectScope(true)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsAboutUs(false)
            setIsContactUs(false)
        } else if (path === 'milestones') {
            setIsHome(false)
            setIsProjectScope(false)
            setIsmilestones(true)
            setIsDownloads(false)
            setIsAboutUs(false)
            setIsContactUs(false)
        } else if (path === 'Downloads') {
            setIsHome(false)
            setIsProjectScope(false)
            setIsmilestones(false)
            setIsDownloads(true)
            setIsAboutUs(false)
            setIsContactUs(false)
        } else if (path === 'aboutus') {
            setIsHome(false)
            setIsProjectScope(false)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsAboutUs(true)
            setIsContactUs(false)
        } else if (path === 'ContactUs') {
            setIsHome(false)
            setIsProjectScope(false)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsAboutUs(false)
            setIsContactUs(true)
        }
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"}`} >
            <div className="container-fluid">
                <div className="navbar-heading mt-2">
                    <h3 style={{ marginLeft: '30px' }}>
                        <Link className="navbar-h ms-5" to="/">
                            <img src="https://res.cloudinary.com/dmfljlyu1/image/upload/v1694033302/listened_logo_uhmrcj.png" style={{ height: '50px' }} alt="Logo" className="logo-image me-3" />
                            ListenEd
                        </Link>
                    </h3>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto" style={{ marginRight: '2%' }}>
                        <li className="nav-item">
                            <a onClick={() => { activeSection("home") }} className={`nav-link nav-link-a-text me-5 ${isHome ? 'active' : ''}`} aria-current="page" href="/#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => { activeSection("ProjectScope") }} className={`nav-link nav-link-a-text me-5 ${isProjectScope ? 'active' : ''}`} href="/#ProjectScope">Project Scope</a>
                        </li>

                        <li className="nav-item">
                            <a onClick={() => { activeSection("milestones") }} href='/#milestones' className={`nav-link me-5 nav-link-a-text ${ismilestones ? 'active' : ''}`}>Milestones</a>
                        </li>

                        <li className="nav-item">
                            <a onClick={() => { activeSection("Downloads") }} className={`nav-link nav-link-a-text me-5 ${isDownloads ? 'active' : ''}`} href="/#Downloads">Downloads</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => { activeSection("aboutus") }} className={`nav-link nav-link-a-text me-5 ${isAboutUs ? 'active' : ''}`} href="/#aboutus" >About Us</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => { activeSection("ContactUs") }} className={`nav-link nav-link-a-text me-5 ${isContactUs ? 'active' : ''}`} href="/#ContactUs" >Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;