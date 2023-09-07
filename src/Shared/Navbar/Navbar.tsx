import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    //const {user, loading, error, dispatch} = useContext(AuthContext);
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

    const str = window.location.href;

    const isGallery = str.includes("/my-photo");
    const isProject = str.includes("/my-projects");
    const isContactMe = str.includes("/#contact");
    const isAboutUs = str.includes("/#about");

    let isHome = str.includes("#home");

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
                            <a className={`nav-link nav-link-a-text me-5 ${isHome ? 'active' : ''}`} aria-current="page" href="/#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-5 ${isAboutUs ? 'active' : ''}`} href="/#ProjectScope">Project Scope</a>
                        </li>

                        <li className="nav-item">
                            <a href='/#milestones' className={`nav-link me-5 nav-link-a-text ${isContactMe ? 'active' : ''}`}>Milestones</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-5 ${isProject ? 'active' : ''}`} href="#Downloads">Downloads</a>
                        </li>

                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-5 ${isGallery ? 'active' : ''}`} href="#AboutUs" >About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link nav-link-a-text me-5 ${isGallery ? 'active' : ''}`} href="#ContactUs" >Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;