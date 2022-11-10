import React from 'react'
import './navbar.styles.css'
import {CgMenuLeft} from 'react-icons/cg'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {AiOutlineFile} from 'react-icons/ai'
import {BiBookContent} from 'react-icons/bi'
import {BiPhone} from 'react-icons/bi'
const Navbar = () => {
    const getToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navigationBar">
                <div className="container-fluid justify-content-end">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <CgMenuLeft className='menuLogo'/>
                    </button>
                    <div className="offcanvas offcanvas-end"  tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header justify-content-end">
                            <button type="button" className="btn-close btn-color" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body  d-flex justify-content-center">
                            <ul className="navbar-nav justify-content-center flex-grow-1">
                                <li className="nav-item" onClick={getToTop}>
                                    <a className="nav-link" href="#hero"><AiOutlineHome className='navIcons'/><span>Home</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about-data"><BsPerson className='navIcons'/><span>About</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#resume"><AiOutlineFile className='navIcons'/><span>Resume</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#projects"><BiBookContent className='navIcons'/><span>Portfolio</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact"><BiPhone className='navIcons'/><span>Contact</span></a>
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