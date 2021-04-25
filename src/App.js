import './App.css';
//Components
import Header from './components/header/Header';
import Welcome from './components/intro/Welcome';
import Title from './components/title/Title';
import Scrolldown from './components/scrolldown/Scrolldown';
//Pages
import AboutMe from './pages/about/AboutMe';
//Parallax effect
import {Parallax} from 'react-parallax';
//Animations
import Fade from 'react-reveal/Fade';
//Parallax Image
import ParallaxImage from './assets/images/parallax/parallax.jpg';
//Bootstrap components
import Container from 'react-bootstrap/Container'


const App =() =>{
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Title/>
      <Scrolldown/>
      {/** Pages */}
      {/* <div> */}
        <Parallax blur={{min:-30, max:30}}
            bgImage={ParallaxImage}
            bgImageAlt='Parallax Image'
            strength={-100}>
              {/* <div> */}
                <Container className='container-box rounded'>
                  <Fade duration={500}>
                    <AboutMe/>
                  </Fade>
               </Container>
              {/* </div> */}
        </Parallax>
      {/* </div> */}
      
    </div>
  );
}

export default App;
