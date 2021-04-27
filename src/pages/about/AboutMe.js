import React from 'react';
//React Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
//My Image
import MyPhoto from '../../assets/images/profile/MyPhoto.jpg';
//My Resume
import MyResume from '../../assets/resume/SaiLakshmyResume.pdf';
//Styles
import '../about/AboutMe.css';

const AboutMe = () => {
    // const downloadResume=()=>{
    //     window.location.href= MyResume;
    // }
  return (
    // <div>
        <div className="about" id="aboutme">
        <h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
      <Container>
          <Row className='pt-3 pb-5 align-items-center'>
              <Col xs={12} md={6}>
                  <Row className='mb-2 mr-2 justify-content-center'>
                    <Image className="profile justify-content-end" 
                           src={MyPhoto} 
                           alt='My personal photo' 
                           thumbnail/>
                  </Row>
              </Col>
              <Col xs={12} lg={6}>
                  <Row className='align-items-start p-2 my-details rounded'>
                      Ola!!!
                    <br/>
                    &nbsp; &nbsp; I am Sai Lakshmy, an organized, reliable and skilled individual with excellent communication
                      skills, looking to offer my services as a front-end web developer. I am an experienced software engineer with a 
                      demonstrated history of working with agile methodologies. 
                    <br/>
                      &nbsp; &nbsp; I am a strong engineering professional who graduated from Sathyabama University, with a keen 
                      interest in developing web applications with responsive web designs.
                    <br/>
                    <ul><h5> A few personal details about me:</h5>
                        <li className="personalDetails"><em>Date of Birth:</em> 01/09/1994</li>
                        <li className="personalDetails"><em>Nationality:</em> Indian</li>
                        <li className="personalDetails"><em>Blood Group:</em> B+</li>
                        <li className="personalDetails"><em>Permanent Address:</em> 3-697, Sri Sai Darshan, C.N.Puram, Palakkad, Kerala-678005</li>
                    </ul>
                     <ul><h5> A few fun facts about me:</h5>
                         <li>Although I was born in India, I was brought up abroad.</li>
                         <li>In addition to English, I can speak 4 different Indian languages, namely Hindi,Telugu, Malayalam and Tamil.</li>
                         <li>My hobbies include public speaking,reading, yoga and dancing.</li>
                     </ul>
                     <Col className="d-flex justify-content-center flex-wrap">
                         <div>
                            <a href='#contact'>
                                <Button className="m-2" variant="outline-primary">Want to connect?</Button>
                            </a>
                         </div>
                         <div>
                         <a href={MyResume} download="SaiLakshmyResume" target='_blank' rel="noreferrer">
                             <Button className="m-2" variant="outline-success">Want a copy of my resume?</Button>
                         </a>
                            {/* <Button onClick={downloadResume}  className="m-2" variant="outline-success">My Resume</Button> */}
                         </div>
                     </Col>
                  </Row>
              </Col>
          </Row>
      </Container>
    
        </div>
    //  </div>
  )
}

export default AboutMe;
