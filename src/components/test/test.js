import React, { useEffect } from 'react'
/* import './test.styles.css' */
import AboutForeground from '../../assets/about_foreground.png';
import AboutSky from '../../assets/about_sky.png';
const Test = () => {

    useEffect(() => {
        let aim = document.getElementById('image'), room, overflow;
        let aim2 = document.getElementById('image2'), room2, overflow2;

        room = window.innerHeight;
        overflow = document.body.scrollHeight - room; 
        aim.style.setProperty('--maximum', room - aim.height + 'px');

        console.log({room, overflow});
        console.log(aim.height);

        room2 = window.innerHeight;
        overflow2 = document.body.scrollHeight - room2;
        aim2.style.setProperty('--maximum', room2 - aim2.height + 'px');

        window.addEventListener('load', setEdge);
        window.addEventListener('resize', setEdge);

        window.addEventListener('scroll', function () {
            let ratio = (window.scrollY) / parseInt(overflow);
            let ratio2 = (window.scrollY) / parseInt(overflow2);
            /* console.log(ratio); */
            aim.style.setProperty('--epoch', ratio);
            aim2.style.setProperty('--epoch', ratio2);
        });
        /* console.log(window.pageYOffset); */
        function setEdge() {

            room = window.innerHeight;
            overflow = document.body.scrollHeight - room;
            console.log({ room, overflow });
            
            
            room2 = window.innerHeight;
            overflow2 = document.body.scrollHeight - room2;
            /* console.log({room2, overflow2}); */

            aim.style.setProperty('--maximum', room - aim.height + 'px');
            aim2.style.setProperty('--maximum', room2 - aim2.height + 'px');
        }
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