import React from 'react'
import './navbar.styles.css'
import {CgMenuLeft} from 'react-icons/cg'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navigationBar">
                <div className="container-fluid justify-content-end">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <CgMenuLeft className='menuLogo'/>
                    </button>
                    <div className="offcanvas offcanvas-end"  tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header justify-content-end">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body  d-flex justify-content-center">
                            <ul className="navbar-nav justify-content-center flex-grow-1">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="!">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#products">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="!">Resume</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contactUsSection">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contactUsSection">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Navbar