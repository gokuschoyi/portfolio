import React, { useEffect } from 'react'
import './about.styles.css'
import AboutForeground from '../../assets/about_foreground.png';
import AboutSky from '../../assets/about_sky.png';
const Test = () => {

    useEffect(() => {
        const threshold = window.innerHeight;
        let aim = document.getElementById('image'), room, overflow;
        let aim2 = document.getElementById('image2'), room2;

        room = window.innerHeight;
        overflow = document.body.scrollHeight - room;

        room2 = window.innerHeight;

        window.addEventListener('load', setEdge);
        window.addEventListener('resize', setEdge);

        window.addEventListener('scroll', function () {
            if (window.scrollY > threshold) {
                var scroll = window.scrollY;
                var rat = (scroll) / overflow;
                var ratN = (2-(1 / rat).toFixed(2));
                /* console.log({ rat, ratN }) */
                
                aim.style.setProperty('--epoch', ratN);
                aim2.style.setProperty('--epoch', ratN);
            } else {
                aim.style.setProperty('--epoch', 0);
                aim2.style.setProperty('--epoch', 0);
            }
        });

        function setEdge() {
            room = window.innerHeight;
            overflow = document.body.scrollHeight - room;

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
            <div className='test'>
                <div className='test-wrapper'>
                    <img id='image' src={AboutSky} alt="" />
                    <img id='image2' src={AboutForeground} alt="" />
                </div>
            </div>
        </>
    )
}

export default Test