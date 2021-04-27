import React from 'react';
//React Bootstrap Components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//Styles
import './Contact.css';
const Contact = () => {
  return (
    <div id='contactme'>
      <h1 className="pt-2 text-center font-details pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
          <Row> 
              <Col className="d-flex justify-content-center flex-wrap">
                  <div className="m-2">
                    <a href="mailto:sailakshmy94@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="danger">
                        <i className="fas fa-envelope"></i>
                            &nbsp;Email
                        </Button>
                    </a>
                  </div>
                  <div className="m-2">
                    <a href="https://github.com/sailakshmy" target="_blank" rel="noopener noreferrer">
                        <Button variant="dark">
                            <i className="fab fa-github-square"> </i>
                            &nbsp;GitHub
                        </Button>
                    </a>
                  </div>
                  <div className="m-2">
                    <a href="https://www.linkedin.com/in/sai-lakshmy/" target="_blank" rel="noopener noreferrer">
                        <Button variant="info">
                            <i className="fab fa-linkedin"></i>
                            &nbsp;LinkedIn
                        </Button>
                    </a>
                  </div> 
              </Col>
          </Row>
      </Jumbotron>
    </div>
  )
}

export default Contact
