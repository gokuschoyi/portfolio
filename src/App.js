import './App.css';
import Navbar from './components/navbar/navbar.component';
import Hero from './components/hero-section/hero-section.component';
import About from './components/about/about.component';
import Test from './components/test/test';
function App() {
  return (
    <>
      <div className="App">
        
        <Navbar />
        <Hero />
        <div className="content">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
