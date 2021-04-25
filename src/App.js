import './App.css';
//Components
import Header from './components/header/Header';
import Welcome from './components/intro/Welcome';
import Title from './components/title/Title';
import Scrolldown from './components/scrolldown/Scrolldown';
//Pages
import AboutMe from './pages/about/AboutMe';
import TechStack from './pages/skills/TechStack';
import Experience from './pages/experience/Experience';
//Parallax effect
import {Parallax} from 'react-parallax';
//Animations
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
//Parallax Image
import ParallaxImage from './assets/images/parallax/parallax.jpg';
//React Bootstrap components
import Container from 'react-bootstrap/Container'


const App =() =>{
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Title/>
      <Scrolldown/>
      {/** Pages */}
      <Parallax blur={{min:-30, max:30}}
            bgImage={ParallaxImage}
            bgImageAlt='Parallax Image'
            strength={-100}>
            <Container className='container-box rounded'>
              <Fade duration={500}>
                <AboutMe/>
              </Fade>
            </Container>
      </Parallax>
      <Container className="container-box rounded">
        <Slide bottom duration={1000}>
          <TechStack/>
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={1000}>
          <Experience/>
        </Fade>
      </Container>
      
    </div>
  );
}

export default App;
