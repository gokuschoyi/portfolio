import React, { useEffect } from 'react'
import { Waypoint } from 'react-waypoint';
import './projects.styles.css'
import PP from '../../assets/project_placeholder.jpg';

const Projects = () => {
    useEffect(() => {
        const resumeContent = document.getElementsByClassName('resume-content');
        const projectSection = document.getElementsByClassName('projects-section');
        const height = resumeContent[0].clientHeight + 200;
        projectSection[0].style.marginTop = `${height}px`;
        window.addEventListener('resize', () => {
            const height = resumeContent[0].clientHeight + 200;
            projectSection[0].style.marginTop = `${height}px`;
            /* console.log(height); */
        });
    })
    const animateProjectOne = () => {
        const project1 = document.getElementsByClassName('project-one');
        project1[0].classList.add('animate-projectOne');
    }
    const animateProjectTwo = () => {
        const project2 = document.getElementsByClassName('project-two');
        project2[0].classList.add('animate-projectTwo');
    }
    const animateProjectThree = () => {
        const project3 = document.getElementsByClassName('project-three');
        project3[0].classList.add('animate-projectThree');
    }
    const animateProjectFour = () => {
        const project4 = document.getElementsByClassName('project-four');
        project4[0].classList.add('animate-projectFour');
    }
    const remove = () => {
        console.log('remove');
        const project1 = document.getElementsByClassName('project-one');
        const project2 = document.getElementsByClassName('project-two');
        const project3 = document.getElementsByClassName('project-three');
        const project4 = document.getElementsByClassName('project-four');
        project1[0].classList.remove('animate-projectOne');
        project2[0].classList.remove('animate-projectTwo');
        project3[0].classList.remove('animate-projectThree');
        project4[0].classList.remove('animate-projectFour');
    }
    return (
        <section id='projects' className='projects-section'>
            <h2 className='project-title' style={{ color: 'black' }}>Projects</h2>
            <div className='container-fluid'>
                <Waypoint
                    onEnter={animateProjectOne}>
                    
                </Waypoint>
                <div className='row p-4 project project-one justify-content-center '>
                    <div className='col-10 ps-5 pe-5'>
                        <div className="card text-center">
                            <div className="card-header">
                                Project 1
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Build Audience</h5>
                            </div>
                            <div className="card-footer text-muted">
                                <button className="btn btn-dark" style={{ margin: '5px' }}  ><i className="bi bi-github"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Waypoint
                    onEnter={animateProjectTwo}>
                </Waypoint>
                <div className='row p-4 project project-two justify-content-center '>
                    <div className='col-10 ps-5 pe-5'>
                        <div className="card text-center">
                            <div className="card-header">
                                Project 2
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Build Audience</h5>
                            </div>
                            <div className="card-footer text-muted">
                                <button className="btn btn-dark" style={{ margin: '5px' }}  ><i className="bi bi-github"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Waypoint
                    onEnter={animateProjectThree}>
                </Waypoint>
                <div className='row p-4 project project-three justify-content-center '>
                    <div className='col-10 ps-5 pe-5'>
                        <div className="card text-center">
                            <div className="card-header">
                                Project 3
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Build Audience</h5>
                            </div>
                            <div className="card-footer text-muted">
                                <button className="btn btn-dark" style={{ margin: '5px' }}  ><i className="bi bi-github"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <Waypoint
                    onEnter={animateProjectFour}>
                </Waypoint>
                <div className='row p-4 project project-four justify-content-center '>
                    <div className='col-10 ps-5 pe-5'>
                        <div className="card text-center">
                            <div className="card-header">
                                Project 4
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Build Audience</h5>
                            </div>
                            <div className="card-footer text-muted">
                                <button className="btn btn-dark" style={{ margin: '5px' }}  ><i className="bi bi-github"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects