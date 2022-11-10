import React, { useEffect } from 'react'
import './test.styles.css'
import { Waypoint } from 'react-waypoint';


const Test = () => {

    useEffect(() => {
        document.getElementById('bl-main').querySelectorAll('section')
            .forEach(item => {
                item.addEventListener('click', event => {
                    const mainContainer = document.getElementsByClassName('bl-main')
                    const projectOne = document.getElementsByClassName(`${item.className}`)
                    mainContainer[0].classList.add('bl-expand-item')
                    projectOne[0].classList.add('bl-expand', 'bl-expand-top')
                    /* console.log('clicked', `${item.className}`) */
                })
            })
    })

    const closeTab = (value) => {
        console.log(value)
        const mainContainer = document.getElementsByClassName('bl-main')
        const project = document.getElementsByClassName(`${value}`)
        project[0].classList.remove('bl-expand', 'bl-expand-top')
        mainContainer[0].classList.remove('bl-expand-item')
    }

    const animateProject = () => {
        const project1 = document.getElementsByClassName('bl-main');
        project1[0].classList.add('projectFinal');
        console.log(project1[0].classList)
    }

    const remove = () => {
        console.log('remove');
        const project1 = document.getElementsByClassName('bl-main');
        
        project1[0].classList.remove('projectFinal');
    }

    return (
        <>
            <div className="container-fluid new">
                {<Waypoint
                    onEnter={animateProject}
                    onLeave={remove}>
                </Waypoint>}
                <div id="bl-main" className="bl-main projectInitial">

                    <section id='project' className='projectOne' >
                        <div className="bl-box">
                            <h2 className="bl-icon bl-icon-about">Project One</h2>
                        </div>
                        <div className="bl-content">
                            <h2>About this Project</h2>
                            <p>This responsive layout is based on an initial grid of four boxes. Once a box is clicked, it gets resized to fullscreen and the other boxes scale down and fade out. In the work section we experiment with another transition which is to show a panel by making it appear from the bottom while scaling the current one down. To see it in action, open the work section and click on one of the portfolio items and navigate through them.</p>
                            <p>
                                <button id='buttonClose' value='projectOne' onClick={event => closeTab('projectOne')}><strong>Go Back</strong></button>
                            </p>
                        </div>
                    </section>

                    <section id='project' className='projectTwo'>
                        <div className="bl-box">
                            <h2 className="bl-icon bl-icon-about">Project Two</h2>
                        </div>
                        <div className="bl-content">
                            <h2>About this Project</h2>
                            <p>This responsive layout is based on an initial grid of four boxes. Once a box is clicked, it gets resized to fullscreen and the other boxes scale down and fade out. In the work section we experiment with another transition which is to show a panel by making it appear from the bottom while scaling the current one down. To see it in action, open the work section and click on one of the portfolio items and navigate through them.</p>
                            <p>
                                <button id='buttonClose' value='projectOne' onClick={event => closeTab('projectTwo')}><strong>Go Back</strong></button>
                            </p>
                        </div>
                    </section>

                    <section id='project' className='projectThree'>
                        <div className="bl-box">
                            <h2 className="bl-icon bl-icon-about">Project Three</h2>
                        </div>
                        <div className="bl-content">
                            <h2>About this Project</h2>
                            <p>This responsive layout is based on an initial grid of four boxes. Once a box is clicked, it gets resized to fullscreen and the other boxes scale down and fade out. In the work section we experiment with another transition which is to show a panel by making it appear from the bottom while scaling the current one down. To see it in action, open the work section and click on one of the portfolio items and navigate through them.</p>
                            <p>
                                <button id='buttonClose' value='projectOne' onClick={event => closeTab('projectThree')}><strong>Go Back</strong></button>
                            </p>
                        </div>
                    </section>

                    <section id='project' className='projectFour'>
                        <div className="bl-box">
                            <h2 className="bl-icon bl-icon-about">Project Four</h2>
                        </div>
                        <div className="bl-content">
                            <h2>About this Project</h2>
                            <p>This responsive layout is based on an initial grid of four boxes. Once a box is clicked, it gets resized to fullscreen and the other boxes scale down and fade out. In the work section we experiment with another transition which is to show a panel by making it appear from the bottom while scaling the current one down. To see it in action, open the work section and click on one of the portfolio items and navigate through them.</p>
                            <p>
                                <button id='buttonClose' value='projectOne' onClick={event => closeTab('projectFour')}><strong>Go Back</strong></button>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Test