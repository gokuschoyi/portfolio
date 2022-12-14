import React, { useEffect } from 'react'
import './about.styles.css'
import { BsChevronDoubleRight } from 'react-icons/bs'
import AboutForeground from '../../assets/about_foreground.png';
import AboutSky from '../../assets/about_sky.png';
/* import ProfileBackground from '../../assets/profile_background.png'; */
import ProfileMe from '../../assets/me.png';
const Test = () => {

    useEffect(() => {
        const threshold = window.innerHeight;
        /* console.log({ threshold }); */
        let aim = document.getElementById('image'), room, overflow;
        let aim2 = document.getElementById('image2'), room2;

        let about = document.getElementById('about');
        var aboutHeight = about.scrollHeight
        /* console.log({ aboutHeight }) */

        room = window.innerHeight;
        overflow = about.scrollHeight - room;

        room2 = window.innerHeight;

        window.addEventListener('load', setEdge);
        window.addEventListener('resize', setEdge);

        window.addEventListener('scroll', function () {
            if (window.scrollY > threshold && window.scrollY < overflow) {
                var scroll = window.scrollY;
                var rat = (scroll / overflow).toFixed(2);
                var ratN = 2 - (1 / rat);
                /* if (scroll % 100 === 0) {
                    console.log({ scroll, overflow, rat, ratN })
                } */

                aim.style.setProperty('--epoch', ratN);
                aim2.style.setProperty('--epoch', ratN);
            }

            if (window.scrollY < threshold) {
                aim.style.setProperty('--epoch', 0);
                aim2.style.setProperty('--epoch', 0);
            }
        });

        function setEdge() {
            room = window.innerHeight;
            overflow = about.scrollHeight - room;
            console.log("edge set")
            aim.style.setProperty('--maximum', room - aim.height + 'px');
            aim2.style.setProperty('--maximum', room2 - aim2.height + 'px');
        }


        /* var scroll = window.scrollY;
        var rat = (scroll) / overflow; */
        /* console.log({ overflow, room, scroll, ratN })
        console.log(room - aim.height + 'px')
        console.log(document.body.scrollHeight) */
    });

    return (
        <>
            <section id='about' className='about-section'>
                <div className='container-fluid'>
                    <div className='test'>
                        <div className='test-wrapper'>
                            <img id='image' src={AboutSky} alt="" />
                            <img id='image2' src={AboutForeground} alt="" />
                        </div>
                        <div className="row about-row justify-content-center mx-0">
                            <div className="col-lg-10 col-sm-12 about-content" id='about-data' data-aos="fade-left">
                                <h3>Software Engineer &amp; Web Developer.</h3>
                                <p className="fst-italic" style={{ textAlign: 'justify' }}>
                                    Hey everyone, Gokul here, a UI/UX Designer and Web Developer from India.
                                    I am a passionate self-taught UI/UX Designer and Web Developer.
                                    My main focus is on creating User Centric, Dynamic User Interfaces for the Web and Mobile.
                                    I am a fan of technology, design, and web development.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul style={{ listStyleType: 'none' }}>
                                            <li><BsChevronDoubleRight /> <strong>Degree:</strong> <span>Bachelor IT</span></li>
                                            <li><BsChevronDoubleRight /> <strong>Availability:</strong> <span>Available to work ASAP</span></li>

                                        </ul>
                                    </div>
                                    {/* <div className="col-lg-6">
                                        <ul style={{ listStyleType: 'none' }}>
                                            <li><BsChevronDoubleRight /> <strong>City:</strong> <span>Canberra, ACT</span></li>
                                            <li><BsChevronDoubleRight /> <strong>Email:</strong> <span>gokulsangamitrachoyi@gmail.com</span></li>
                                            <li><BsChevronDoubleRight /> <strong>Phone:</strong> <span>0 435 660 343</span></li>
                                        </ul>
                                    </div> */}
                                </div>
                                <p>
                                    {/* put something here */}
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-end mx-0">
                            <div className="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-end" data-aos="fade-right" style={{ height: '50vh', overflow: 'hidden' }} >
                                <div className="profile-me">
                                    <img src={ProfileMe} className="profile-me" alt="profileMe" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Test