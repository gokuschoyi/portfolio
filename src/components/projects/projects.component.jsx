import React, { useEffect } from 'react'
import './project.styles.css'
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
    return (
        <section id='projects' className='projects-section'>
            <h2 className='project-title'>Projects</h2>
            <div className='container'>
                <div className='row  p-4'>
                    <div className='col-6 d-flex justify-content-center'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={PP} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Project 1</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-dark" style={{ margin: '5px' }}  ><i className="bi bi-github"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 d-flex justify-content-center'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={PP} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Project 2</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-dark" style={{ margin: '5px' }}  ><i className="bi bi-github"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row justify-content-center p-4'>
                    <div className='col-6 d-flex justify-content-center'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={PP} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Project 3</p>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-dark" style={{ margin: '5px' }}  ><i className="bi bi-github"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 d-flex justify-content-center'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={PP} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Project 4</p>
                            </div>
                            <div className="card-footer">
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