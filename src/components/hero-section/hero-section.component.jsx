import React, { useRef, useEffect } from 'react'
import Typed from 'typed.js';
import Sky from '../../assets/sky.png'
import Foreground from '../../assets/foreground.png'
import Tower from '../../assets/tower.png'
import './hero-section.styles.css'
const Hero = () => {

    const el = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'a Developer',
                'a Software Engineer',
                'a Photographer',
                'a Drone Pilot',
                'Speed'
            ],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            shuffle: true,
            loop: true,
            loopCount: Infinity,
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    useEffect(() => {
        const threshold = window.innerHeight+500;
        const tower = document.getElementsByClassName('tower');
        const foreground = document.getElementsByClassName('foreground');
        const sky = document.getElementsByClassName('sky');
        const hero = document.getElementsByClassName('hero');
        const heroContainer = document.getElementsByClassName('hero-container');
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            const scrollPosition = Math.abs(scroll / 100);
            if (scroll % 100 === 0) { console.log({scrollPosition, scroll}) }
            /* console.log(scroll); */
            if (threshold > scroll) {
                tower[0].style.transform = `scale(${1 + scroll * 0.00015})`;
                foreground[0].style.transform = `translateY(-${scroll * 0.01}px)`;
                foreground[0].style.transform = `scale(${1 + scroll * 0.00009})`;
                sky[0].style.transform = `translateY(${scroll * 0.09}px)`;/*  */
                sky[0].style.transform = `scale(${1 + scroll * 0.00005})`;
                /* console.log({ threshold, scroll }); */
            }

            window.scrollY > threshold ? heroContainer[0].classList.add('past-threshold') : heroContainer[0].classList.remove('past-threshold');
            /* if (window.scrollY > 999) {
                console.log(true)
                hero[0].style.transform = `translateY(-${(scrollPosition-10) * 100}px)`;
            }
            else{
                hero[0].style.transform = `translateY(${scroll*0.01}px)`;
            } */
            /* window.scrollY > 1499 ? hero[0].classList.add('heroThreshold') : hero[0].classList.remove('heroThreshold');
 */
            /*  window.scrollY > threshold ?
                document.body.classList.add('past-threshold') :
                document.body.classList.remove('past-threshold'); */
        })

    })



    function detectTrackPad(e) {
        var isTrackpad = false;
        if (e.wheelDeltaY) {
            if (Math.abs(e.wheelDeltaY) !== 120) {
                isTrackpad = true;
            }
        }
        else if (e.deltaMode === 0) {
            isTrackpad = true;
        }
        /* console.log(isTrackpad ? "Trackpad detected" : "Mousewheel detected");
        console.log(e.deltaMode) */
    }

    document.addEventListener("mousewheel", detectTrackPad, false);
    document.addEventListener("DOMMouseScroll", detectTrackPad, false);

    /* function onTouchStart (e) {
        console.log('touchstart')
        console.log(e)
    }

    document.addEventListener('touchmove', onTouchStart, {passive: true}); */

    return (
        <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center">
            <div className='banner-wrapper' >
                <img src={Sky} alt='sky' className='sky'></img>
                <img src={Foreground} alt='foreground' className='foreground'></img>
                <img src={Tower} alt='tower' className='tower'></img>
            </div>
            <div className="hero-container"  >
                <h1 >Gokul S Choyi</h1>
                <p>I'm <span ref={el} /></p>
            </div>
        </section>

    )
}

export default Hero