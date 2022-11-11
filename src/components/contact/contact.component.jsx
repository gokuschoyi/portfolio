import React from 'react'
import './contact.styles.scss'
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineShareAlt, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { IoLocationOutline } from 'react-icons/io5'

const Contact = () => {
    return (
        <section id='contact' className="contact-section">
            <div className="container">
                <div className="container__box">
                    <h1 className="container__title">CONTACT</h1>
                    <div className="info">
                        <div className="info__box">
                            <div className="info__content">
                                <IoLocationOutline className='info__icon' />
                                <p className="info__details">
                                    Canberra <br />
                                    ACT <br />
                                    2614
                                </p>
                            </div>
                            <div className="info__content">
                                <AiOutlineShareAlt className='info__icon' />
                                <div className="social">
                                    <a href="https://www.instagram.com/gokulchoyi/" target="_blank" rel="noreferrer">
                                        <AiOutlineInstagram className='social__icon' style={{ transform: 'rotate(-90deg)', marginRight:'120px' }} />
                                    </a>
                                    <a href="https://github.com/gokuschoyi" target="_blank" rel="noreferrer">
                                        <AiOutlineLinkedin className='social__icon' style={{ transform: 'rotate(-90deg)', marginLeft:'120px' }} />
                                    </a>
                                </div>
                            </div>
                            <div className="info__content">
                                <AiOutlinePhone className='info__icon' />
                                <p className="info__details">+61 435 660 343</p>
                            </div>
                            <div className="info__content">
                                <AiOutlineMail className='info__icon' />
                                <p className="info__details">gokulsangamitrachoyi@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact