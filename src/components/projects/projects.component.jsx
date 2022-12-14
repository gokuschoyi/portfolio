import React, { useEffect } from 'react'
import { Waypoint } from 'react-waypoint';
import './projects.styles.css'
/* import PP from '../../assets/project_placeholder.jpg'; */

const Projects = () => {
    useEffect(() => {
        const resumeContent = document.getElementsByClassName('resume-content');
        const projectSection = document.getElementsByClassName('new');
        const height = resumeContent[0].clientHeight + 200;
        projectSection[0].style.marginTop = `${height}px`;
        window.addEventListener('resize', () => {
            const height = resumeContent[0].clientHeight + 200;
            projectSection[0].style.marginTop = `${height}px`;
            /* console.log(height); */
        });
    })
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
            <div id='projects' className="container-fluid new">
                <Waypoint
                    onEnter={animateProject}>
                </Waypoint>
                <div id="bl-main" className="bl-main projectInitial">
                    <section id='project' className='projectOne' >
                        <div className="bl-box">
                            <h2 className="bl-icon bl-icon-about">Build Audience</h2>
                        </div>
                        <div className="bl-content">
                            <h2>About this Project</h2>
                            <p className='project-description'>After the initial 3 months internship, I took the responsibility to design and develope one of TekTorch's projects : BUILDAUDIENCE.
                                This was a huge learning experience for me as it was the first time I had to design and develop a website from scratch.
                                I used ReactJS for the front-end. I used the Agile methodology to develop this project and Github to manage the code.
                                I also utilised Webflow to design the initial wireframes which I then incorporated into React.
                            </p>
                            <div className="btn-group close-button" role="group" aria-label="Basic example">
                                <a href='https://github.com/gokuschoyi/BuildAudience.git' target='_blank' rel="noreferrer">
                                    <button type="button" className="btn btn-dark m-2">Link</button>
                                </a>
                                <button type="button" onClick={event => closeTab('projectOne')} className="btn btn-dark m-2">Close</button>
                            </div>
                        </div>
                    </section>

                    <section id='project' className='projectTwo'>
                        <div className="bl-box">
                            <h2 className="bl-icon bl-icon-about">Industry Project</h2>
                        </div>
                        <div className="bl-content">
                            <h2>About this Project</h2>
                            <p className='project-description'>Our Final year project focused on developing a Check-In website for a Vet Clinic based in Sydney. We followed an Agile approach
                                with sprint meeting every 2 weeks. This was done in groups of 5, where I was the team leader. I delegated tasks to each member ensuring that all tasks were completed on time.
                                The main requirement was to enable paperless checkin. We were also able to add other functionalities to the system such as the ability to assign doctors to each client and allowed for the updation of the status.
                            </p>
                            <div className="btn-group close-button" role="group" aria-label="Basic example">
                                <a href='https://github.com/gokuschoyi/WildVetCheckinSystem.git' target='_blank' rel="noreferrer">
                                    <button type="button" className="btn btn-dark m-2">Link</button>
                                </a>
                                <button type="button" onClick={event => closeTab('projectTwo')} className="btn btn-dark m-2">Close</button>
                            </div>
                        </div>
                    </section>

                    <section id='project' className='projectThree'>
                        <div className="bl-box">
                            <h2 className="bl-icon bl-icon-about">Cafe Website</h2>
                        </div>
                        <div className="bl-content">
                            <h2>About this Project</h2>
                            <p>This is a simple SPA for the cafe I worked for. They did not have any website and I thought why not and created this website. </p>
                            <div className="btn-group close-button" role="group" aria-label="Basic example">
                                <a href='https://github.com/gokuschoyi/sakeenascafe.git' target='_blank' rel="noreferrer">
                                    <button type="button" className="btn btn-dark m-2">Link</button>
                                </a>
                                <button type="button" onClick={event => closeTab('projectThree')} className="btn btn-dark m-2">Close</button>
                            </div>
                        </div>
                    </section>

                    <section id='project' className='projectFour'>
                        <div className="bl-box">
                            <h2 className="bl-icon bl-icon-about">Coffee Shop</h2>
                        </div>
                        <div className="bl-content">
                            <h2>About this Project</h2>
                            <p>Another SPA for a Coffee shop that we are plannig to open In India. It is not complete yet. and we are planning out the different products that we can offer.</p>
                            <div className="btn-group close-button" role="group" aria-label="Basic example">
                                <a href='https://github.com/gokuschoyi/rebeans.git' target='_blank' rel="noreferrer">
                                    <button type="button" className="btn btn-dark m-2">Link</button>
                                </a>
                                <button type="button" onClick={event => closeTab('projectFour')} className="btn btn-dark m-2">Close</button>
                            </div>
                        </div>
                    </section>
                </div>
                {/* <Waypoint
                    onLeave={remove}>
                </Waypoint> */}
            </div >
        </>
    )
}

export default Projects