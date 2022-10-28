import { useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.component';
import Hero from './components/hero-section/hero-section.component';
import About from './components/about/about.component';
import Resume from './components/resume/resume.component';
import Projects from './components/projects/projects.component';
import Test from './components/test/test';
function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(this.getAttribute('href'));
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  })
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Resume />
        <Projects />
      </div>
    </>
  );
}

export default App;
