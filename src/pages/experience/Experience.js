import React from 'react';
//React Bootstrap components
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
//Tilt package
import Tilt from 'react-tilt';
//Styles
import './Experience.css';
//Companies
import {Companies} from './Companies';


const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
      <Container>
         
              {Companies.map((company,index)=>(
                  <Tilt options={{max:25}}>
                  <Card key={index}  bg="dark" text="white">
                      <Card.Header as="h3" className="d-flex justify-content-center flex-wrap">
                          {company.companyName}
                      </Card.Header>
                      <Card.Body className="d-flex justify-content-center flex-column">
                          <Card.Title className="text-center">{company.designation}</Card.Title>
                          <Card.Text className="text-center style">
                              <strong>Technology:</strong> {company.technology}
                              <br/>
                              <strong>Duration:</strong> {company.duration}
                              <br/>
                              <strong>Job Description:</strong>
                              {company.jobDescription.map((jd,i)=>(
                                  <ul key={i}>
                                      <li className="text-left">{jd}</li>
                                  </ul>
                              ))}
                          </Card.Text>
                      </Card.Body>
                  </Card>
                 <br/> 
                  </Tilt>
              ))}
         
      </Container>
      </Jumbotron>
    </div>
  )
}

export default Experience
