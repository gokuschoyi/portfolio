import React from 'react'
import './test.styles.css'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineShareAlt, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'

const Test = () => {
    return (
        <section id='contact' className="contact-section">
            <div className="container">
                <div className='contact-title-container'>
                    <h1 className="contact-title">CONTACT</h1>
                </div>
                <div className='row justify-content-center contact-group'>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className="info-content">
                            <IoLocationOutline className='info-icon' />
                            <p className="info-details">
                                Canberra <br />
                                ACT <br />
                                2614
                            </p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className="info-content">
                            <AiOutlineShareAlt className='info-icon' />
                            <div className="social">
                                <a href="https://www.instagram.com/gokulchoyi/" target="_blank" rel="noreferrer">
                                    <AiOutlineInstagram className='social-icon' style={{ transform: 'rotate(-90deg)' }} />
                                </a>
                                <a href="https://github.com/gokuschoyi" target="_blank" rel="noreferrer">
                                    <AiOutlineLinkedin className='social-icon' style={{ transform: 'rotate(-90deg)' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className="info-content">
                            <AiOutlinePhone className='info-icon' />
                            <p className="info-details">+61 435 660 343</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 col-lg-3'>
                        <div className="info-content">
                            <AiOutlineMail className='info-icon' />
                            <p className="info-details">gokulsangamitrachoyi@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Test