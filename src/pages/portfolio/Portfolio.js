import React from 'react';
//React Timeline components
import {Timeline, Events, ImageEvent, UrlButton} from '@merc/react-timeline';
//Project details
import {projects} from './Projects';
//React Bootstrap components
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
//Styles
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div id="projects">
        <h1 className="pt-3 text-center font-details pb-3">PORTFOLIO</h1>
        <Timeline>
            <Events>
                {projects.map((project,index)=>(
                    <div key={index}>
                        <ImageEvent date={project.date} 
                            className="text-center" 
                            text={project.title}
                            src={project.image}
                            alt={project.title}>
                                <Accordion className="d-flex justify-content-between flex-column mt-1">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordion-main">
                                            Project Details
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey='0' className="text-left">
                                            <Card.Body>
                                                <strong>Description: </strong>{project.description}
                                                <br/>
                                                <strong>Tech Stack:</strong>{project.technology}
                                                <br/>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <div className="d-flex justify-content-between flex-nowrap text-center">
                                    {project.demo && 
                                        <UrlButton href={project.demo} target="_blank" rel="noreferrer">
                                            See Live
                                        </UrlButton>
                                    }
                                    <UrlButton href={project.sourcecode} target="_blank" rel="noreferrer">
                                        Source Code
                                    </UrlButton>
                                </div>
                            </ImageEvent>
                    </div>
                    
                ))}
            </Events>
        </Timeline>

      
    </div>
  )
}

export default Portfolio
