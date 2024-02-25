import './App.css';
import './component/Navbar/styleNavbar.css';
import { Navbar } from './component/Navbar';
import { Home } from './component/Home';
import { Aboutme } from './component/Aboutme';
import { Skills } from './component/Skills';
import { Projects } from './component/Projects';
import { Contact } from './component/Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className="c-nav">
          <span className="namegw">David Bunyamin</span>
          <div className="navi">
            <Link to="#home"><span>Home</span></Link>
            <Link to="#aboutme"><span>Aboutme</span></Link>
            <Link to="#skills"><span>Skills</span></Link>
            <Link to="#projects"><span>Projects</span></Link>
            <Link to="#contact"><span>Contact</span></Link>
          </div>
        </div>
        <div className="home" id="home">
          <Home></Home>
        </div>
        <div className="am" id="aboutme">
          <Aboutme></Aboutme>
        </div>
        <div className="s" id="skills">
          <Skills></Skills>
        </div>
        <div className="p">
          <Projects></Projects>
        </div>
        <div className="contact">
          <Contact></Contact>
        </div>
      </div>
    </Router>
  );
}

export default App;
