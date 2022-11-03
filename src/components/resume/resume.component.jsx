import React, { useEffect } from 'react'
import { Waypoint } from 'react-waypoint';
import './resume.styles.css'
import ResumeForeground from '../../assets/r_me.png'
import ResumeCenter from '../../assets/r_hand.png'
import ResumeSky from '../../assets/r_bg.png'
const Resume = () => {
  useEffect(() => {
    const resumeSection = document.getElementsByClassName('resume-section');
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 2400) {
        resumeSection[0].classList.add('resume-reveal');
      }
      else {
        resumeSection[0].classList.remove('resume-reveal');
      }
    });
  })

  useEffect(() => {
    const sky = document.getElementsByClassName('resume-sky');
    const center = document.getElementsByClassName('resume-center');
    const foreground = document.getElementsByClassName('resume-foreground');
    const resumeContent = document.getElementsByClassName('resume-content');
    var height = resumeContent[0].clientHeight;

    window.addEventListener('resize', () => {
      height = resumeContent[0].clientHeight;
      /* console.log(height, window.scrollY, 2900+height); */
    });

    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      if (scroll > 2400 && scroll < 2400 + height) {

        sky[0].style.transform = `scale(${1 + scroll * 0.00005})`;
        center[0].style.transform = `scale(${1 + scroll * 0.00008})`;
        foreground[0].style.transform = `scale(${1 + scroll * 0.00013})`;
      }
    });
  })

  /* useEffect(() => {
    let skilsContent = document.getElementsByClassName('skills-content');
    if (skilsContent) {
      var wp = new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function (direction) {
          let progress = document.getElementsByClassName('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%'
          });
        }
      })
    }
  }) */

  const skillsAnimate = () => {
    let progress = document.getElementsByClassName('progress-bar');
    for (let i = 0; i < progress.length; i++) {
      progress[i].style.width = progress[i].getAttribute('aria-valuenow') + '%'
    }
  }

  return (
    <section id='resume' className='resume-section'>
      <div className='resume-banner'>
        <img src={ResumeSky} alt='resume-sky' className='resume-sky'></img>
        <img src={ResumeCenter} alt='resume-center' className='resume-center'></img>
        <img src={ResumeForeground} alt='resume-foreground' className='resume-foreground'></img>

      </div>
      <div className='resume-content'>
        <div className="section-title">
          <div className='row justify-content-center m-3'>
            <div className='col-12 col-sm-12 col-md-8 col-lg-8 blur'>
              <h2>Experience on Hand</h2>
            </div>
            <div className='col-12 col-sm-12 col-md-8 col-lg-8 blur' style={{ textAlign: 'justify', padding: '25px' }}>
              <p>Innovative and deadline-driven Software Engineer with experience designing and developing user-centered UI/UX from initial concept to final, polished deliverable.</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center m-3">
          <div className="col-sm-12 col-md-4 col-lg-4 blur" data-aos="fade-up">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor of Information Technology</h4>
              <h5>2019 - 2022</h5>
              <p><em>La-Trobe University, Sydney</em></p>
              <ul style={{ textAlign: 'justify' }}>
                <li>
                  <p>
                    Relevant courses: Industry Project, Information System Development, Software Design Methodologies, Object Oriented Application Development, International Marketing, Network Systems and Web Security, Big Data Management on the Cloud
                  </p>
                </li>

                <li>
                  <p>
                    Final year project focused on developing a check-in app for veterinarian clinic, achieved Distinction
                  </p>
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h3 className="resume-title">Key Skills</h3>
              <ul style={{ textAlign: 'justify' }}>
                <li><p>Organizational – Managed a challenging project in an Agile environment for Vet clinic, delegated tasks to team members, paying attention to detail and delivered the project on time</p></li>
                <li><p>Leadership –Proactively assisted team members in the final project utilizing training and conflict management, performed high quality research, achieving Distinction</p></li>
                <li><p>Problem Solving – Provides creative solution for a Mobile first app, website, and landing pages from concept through design.</p></li>
                <li><p>Written and Verbal Communication – Developed User Manual and System Maintenance Document for the Vet Clinic’s Check-in App</p></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4 blur" data-aos="fade-up" data-aos-delay={100}>
            <h3 className="resume-title">Relevant Experience</h3>
            <div className="resume-item">
              <h4>Junior Software Developer</h4>
              <h5>July, 2022 - October, 2022</h5>
              <p><em>TekTorch, Sydney </em></p>
              <ul style={{ textAlign: 'justify' }}>
                <li>Voluntarily helping TekTorch to develop one its existing Projects for self-educational purpose</li>
                <li>Redesigned an existing Web App ensuring that the client’s vision and requirements are met </li>
                <li>Developed a responsive Mobile and Web App leveraging the following programming languages: Webflow, ReactJS, JavaScript and Bootstrap</li>
                <li>Integrated the backend using Axios and React Redux for state management</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Junior Software Developer</h4>
              <h5>March 2022 - June2022</h5>
              <p><em>Internship, TekTorch, Sydney</em></p>
              <ul style={{ textAlign: 'justify' }}>
                <li>Designed and developed Front-end based on Client requirements.</li>
                <li>Implemented the design in React, incorporating bootstrap for responsiveness across different platforms</li>
                <li>Integrating the Backend to the Frontend.</li>
                <li>Analyzed and Debugged code for efficient workflow</li>
              </ul>
            </div>
            <div className="resume-item">
              <h3 className="resume-title">Interests</h3>
              <ul style={{ textAlign: 'justify' }}>
                <li>Photography (Aerial Landscape and Portrait, @gokulchoyi) </li>
                <li>Drone Pilot </li>
                <li>FPV Drone (can hover in manual mode, but still learning…) </li>
                <li>Tea over Coffee </li>
                <li>F1 (go Maxx!)</li>
                <li>Gym</li>
                <li>Trekking (rain or shine!) </li>
              </ul>
            </div>
          </div>
        </div>
        <Waypoint
          onEnter={skillsAnimate}>
        </Waypoint>
        <div className='row justify-content-center m-3 '>
          <div className="col-sm-12 col-md-8 col-lg-8 blur">
            <h3 className="resume-title">Technical Skills</h3>
          </div>
        </div>
        <div className="row skills m-3  justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-4 blur p-3" data-aos="fade-up">
            <div className="progress">
              <span className="skill">JavaScript <i className="val">70%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">ReactJs <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">React Redux <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">RTK Query <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">ExpressJs <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">HTML <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">CSS <i className="val">60%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>

          </div>
          <div className="col-sm-12 col-md-8 col-lg-4 blur p-3" data-aos="fade-up" data-aos-delay={100}>
            <div className="progress">
              <span className="skill">MongoDb <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">Firebase <i className="val">65%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">Bootstrap (v5.0) <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">Webflow <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
            <div className="progress">
              <span className="skill">Photoshop/Lightroom <i className="val">80%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume