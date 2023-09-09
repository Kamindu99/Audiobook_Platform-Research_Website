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

    const [isHome, setIsHome] = useState(true)
    const [isProjectScope, setIsProjectScope] = useState(false)
    const [isLitrivew, setIsLitrivew] = useState(false)
    const [isresearchGap, setIsresearchGap] = useState(false)
    const [isProblem, setIsProblem] = useState(false)
    const [isObjectives, setIsObjectives] = useState(false)
    const [isMethodology, setIsMethodology] = useState(false)
    const [isTechnologies, setIsTechnologies] = useState(false)
    const [ismilestones, setIsmilestones] = useState(false)
    const [isDownloads, setIsDownloads] = useState(false)
    const [isDocuments, setIsDocuments] = useState(false)
    const [isPresentations, setIsPresentations] = useState(false)
    const [isAboutUs, setIsAboutUs] = useState(false)
    const [isContactUs, setIsContactUs] = useState(false)

    function activeSection(path: any) {
        if (path === 'home') {
            setIsHome(true)
            setIsProjectScope(false)
            setIsmilestones(false)
            setIsProblem(false)
            setIsObjectives(false)
            setIsMethodology(false)
            setIsTechnologies(false)
            setIsDownloads(false)
            setIsDocuments(false)
            setIsPresentations(false)
            setIsAboutUs(false)
            setIsContactUs(false)
            setIsresearchGap(false)
            setIsLitrivew(false)
        } else if (path === 'researchgap') {
            setIsHome(false)
            setIsProjectScope(true)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsDocuments(false)
            setIsPresentations(false)
            setIsAboutUs(false)
            setIsContactUs(false)
            setIsresearchGap(true)
            setIsLitrivew(false)
            setIsProblem(false)
            setIsObjectives(false)
            setIsMethodology(false)
            setIsTechnologies(false)
        } else if (path === 'Literature') {
            setIsHome(false)
            setIsProjectScope(true)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsDocuments(false)
            setIsPresentations(false)
            setIsAboutUs(false)
            setIsContactUs(false)
            setIsresearchGap(false)
            setIsLitrivew(true)
            setIsProblem(false)
            setIsObjectives(false)
            setIsMethodology(false)
            setIsTechnologies(false)
        } else if (path === 'Problem') {
            setIsHome(false)
            setIsProjectScope(true)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsDocuments(false)
            setIsPresentations(false)
            setIsAboutUs(false)
            setIsContactUs(false)
            setIsresearchGap(false)
            setIsLitrivew(false)
            setIsProblem(true)
            setIsObjectives(false)
            setIsMethodology(false)
            setIsTechnologies(false)
        } else if (path === 'Objectives') {
            setIsHome(false)
            setIsProjectScope(true)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsDocuments(false)
            setIsPresentations(false)
            setIsAboutUs(false)
            setIsContactUs(false)
            setIsresearchGap(false)
            setIsLitrivew(false)
            setIsProblem(false)
            setIsObjectives(true)
            setIsMethodology(false)
            setIsTechnologies(false)
        } else if (path === 'Methodology') {
            setIsHome(false)
            setIsProjectScope(true)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsDocuments(false)
            setIsPresentations(false)
            setIsAboutUs(false)
            setIsContactUs(false)
            setIsresearchGap(false)
            setIsLitrivew(false)
            setIsProblem(false)
            setIsObjectives(false)
            setIsMethodology(true)
            setIsTechnologies(false)
        } else if (path === 'Technologies') {
            setIsHome(false)
            setIsProjectScope(true)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsDocuments(false)
            setIsPresentations(false)
            setIsAboutUs(false)
            setIsContactUs(false)
            setIsresearchGap(false)
            setIsLitrivew(false)
            setIsProblem(false)
            setIsObjectives(false)
            setIsMethodology(false)
            setIsTechnologies(true)
        } else if (path === 'milestones') {
            setIsHome(false)
            setIsProjectScope(false)
            setIsmilestones(true)
            setIsDownloads(false)
            setIsDocuments(false)
            setIsPresentations(false)
            setIsAboutUs(false)
            setIsContactUs(false)
            setIsresearchGap(false)
            setIsLitrivew(false)
            setIsProblem(false)
            setIsObjectives(false)
            setIsMethodology(false)
            setIsTechnologies(false)
        } else if (path === 'Documents') {
            setIsHome(false)
            setIsProjectScope(false)
            setIsmilestones(false)
            setIsDownloads(true)
            setIsDocuments(true)
            setIsPresentations(false)
            setIsAboutUs(false)
            setIsContactUs(false)
            setIsresearchGap(false)
            setIsLitrivew(false)
            setIsProblem(false)
            setIsObjectives(false)
            setIsMethodology(false)
            setIsTechnologies(false)
        } else if (path === 'Presentations') {
            setIsHome(false)
            setIsProjectScope(false)
            setIsmilestones(false)
            setIsDownloads(true)
            setIsDocuments(false)
            setIsPresentations(true)
            setIsAboutUs(false)
            setIsContactUs(false)
            setIsresearchGap(false)
            setIsLitrivew(false)
            setIsProblem(false)
            setIsObjectives(false)
            setIsMethodology(false)
            setIsTechnologies(false)
        } else if (path === 'aboutus') {
            setIsHome(false)
            setIsProjectScope(false)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsDocuments(false)
            setIsPresentations(false)
            setIsAboutUs(true)
            setIsContactUs(false)
            setIsresearchGap(false)
            setIsLitrivew(false)
            setIsProblem(false)
            setIsObjectives(false)
            setIsMethodology(false)
            setIsTechnologies(false)
        } else if (path === 'ContactUs') {
            setIsHome(false)
            setIsProjectScope(false)
            setIsmilestones(false)
            setIsDownloads(false)
            setIsDocuments(false)
            setIsPresentations(false)
            setIsAboutUs(false)
            setIsContactUs(true)
            setIsresearchGap(false)
            setIsLitrivew(false)
            setIsProblem(false)
            setIsObjectives(false)
            setIsMethodology(false)
            setIsTechnologies(false)
        }
    }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDownloadDropdownOpen, setIsDownloadDropdownOpen] = useState(false);

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
                            <a onClick={() => { activeSection("home") }} className={`nav-link nav-link-a-text me-3 ${isHome ? 'active' : ''}`} aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <a
                                className={` nav-link nav-link-a-text me-3 dropdown-toggle ${isProjectScope ? 'active' : ''}`}
                                type="button"
                                role="button"
                                id="projectScopeDropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded={isDropdownOpen}
                            >
                                Project Scope
                            </a>
                            <ul className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`} aria-labelledby="projectScopeDropdown">
                                <li>
                                    <a
                                        className={`dropdown-item ${isLitrivew ? 'active' : ''}`}
                                        href="#Literature"
                                        onClick={() => { activeSection("Literature") }}
                                    >
                                        Literature Survey
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${isresearchGap ? 'active' : ''}`}
                                        href="#researchgap"
                                        onClick={() => { activeSection("researchgap") }}
                                    >
                                        Research Gap
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${isProblem ? 'active' : ''}`}
                                        href="#Problem"
                                        onClick={() => { activeSection("Problem") }}
                                    >
                                        Research Problem & Solution
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${isObjectives ? 'active' : ''}`}
                                        href="#Objectives"
                                        onClick={() => { activeSection("Objectives") }}
                                    >
                                        Research Objectives
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${isMethodology ? 'active' : ''}`}
                                        href="#Methodology"
                                        onClick={() => { activeSection("Methodology") }}
                                    >
                                        Methodology
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${isTechnologies ? 'active' : ''}`}
                                        href="#Technologies"
                                        onClick={() => { activeSection("Technologies") }}
                                    >
                                        Technologies
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a onClick={() => { activeSection("milestones") }} href='#milestones' className={`nav-link me-3 nav-link-a-text ${ismilestones ? 'active' : ''}`}>Milestones</a>
                        </li>

                        <li className="nav-item dropdown" onClick={() => setIsDownloadDropdownOpen(!isDownloadDropdownOpen)}>
                            <a
                                className={` nav-link nav-link-a-text me-3 dropdown-toggle ${isDownloads ? 'active' : ''}`}
                                type="button"
                                role="button"
                                id="downLoadDropdown"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded={isDownloadDropdownOpen}
                            >
                                Downloads
                            </a>
                            <ul className={`dropdown-menu${isDownloadDropdownOpen ? ' show' : ''}`} aria-labelledby="downLoadDropdown">
                                <li>
                                    <a
                                        className={`dropdown-item ${isDocuments ? 'active' : ''}`}
                                        href="#Documents"
                                        onClick={() => { activeSection("Documents") }}
                                    >
                                        Documents
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`dropdown-item ${isPresentations ? 'active' : ''}`}
                                        href="#Presentations"
                                        onClick={() => { activeSection("Presentations") }}
                                    >
                                        Presentations
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => { activeSection("aboutus") }} className={`nav-link nav-link-a-text me-3 ${isAboutUs ? 'active' : ''}`} href="#aboutus" >About Us</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={() => { activeSection("ContactUs") }} className={`nav-link nav-link-a-text me-3 ${isContactUs ? 'active' : ''}`} href="#ContactUs" >Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;