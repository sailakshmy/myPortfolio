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
                <ImageEvent date={projects[0].date} 
                            className="text-center" 
                            text={projects[0].title}
                            src={projects[0].image}
                            alt={projects[0].title}>
                    <Accordion className="d-flex justify-content-between flex-column mt-1 event-card">
                        <Card  bg="dark" text="white">
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordion-main">
                                Project Details
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='0' className="text-left">
                                <Card.Body>
                                    <strong>Description: </strong>{projects[0].description}
                                    <br/>
                                    <strong>Tech Stack:</strong>{projects[0].technology}
                                    <br/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        {projects[0].demo && 
                            <UrlButton href={projects[0].demo} target="_blank" rel="noreferrer">
                                 See Live
                            </UrlButton>
                        }
                        <UrlButton href={projects[0].sourcecode} target="_blank" rel="noreferrer">
                            Source Code
                        </UrlButton>
                    </div>
                </ImageEvent>
                <ImageEvent date={projects[1].date} 
                            className="text-center" 
                            text={projects[1].title}
                            src={projects[1].image}
                            alt={projects[1].title}>
                    <Accordion className="d-flex justify-content-between flex-column mt-1 event-card">
                        <Card  bg="dark" text="white">
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordion-main">
                                Project Details
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='0' className="text-left">
                                <Card.Body>
                                    <strong>Description: </strong>{projects[1].description}
                                    <br/>
                                    <strong>Tech Stack:</strong>{projects[1].technology}
                                    <br/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        {projects[1].demo && 
                            <UrlButton href={projects[1].demo} target="_blank" rel="noreferrer">
                                See Live
                            </UrlButton>
                        }
                        <UrlButton href={projects[1].sourcecode} target="_blank" rel="noreferrer">
                             Source Code
                         </UrlButton>
                    </div>
                </ImageEvent>
                <ImageEvent date={projects[2].date} 
                            className="text-center" 
                            text={projects[2].title}
                            src={projects[2].image}
                            alt={projects[2].title}>
                    <Accordion className="d-flex justify-content-between flex-column mt-1 event-card">
                        <Card  bg="dark" text="white">
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordion-main">
                                Project Details
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='0' className="text-left">
                                <Card.Body>
                                    <strong>Description: </strong>{projects[2].description}
                                    <br/>
                                    <strong>Tech Stack:</strong>{projects[2].technology}
                                    <br/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        {projects[2].demo && 
                            <UrlButton href={projects[2].demo} target="_blank" rel="noreferrer">
                                See Live
                            </UrlButton>
                        }
                        <UrlButton href={projects[2].sourcecode} target="_blank" rel="noreferrer">
                            Source Code
                        </UrlButton>
                    </div>
                </ImageEvent>
                <ImageEvent date={projects[3].date} 
                            className="text-center" 
                            text={projects[3].title}
                            src={projects[3].image}
                            alt={projects[3].title}>
                    <Accordion className="d-flex justify-content-between flex-column mt-1 event-card">
                        <Card  bg="dark" text="white">
                            <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordion-main">
                                Project Details
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey='0' className="text-left">
                                <Card.Body>
                                    <strong>Description: </strong>{projects[3].description}
                                    <br/>
                                    <strong>Tech Stack:</strong>{projects[3].technology}
                                    <br/>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        {projects[3].demo && 
                            <UrlButton href={projects[3].demo} target="_blank" rel="noreferrer">
                            See Live
                            </UrlButton>
                        }
                        <UrlButton href={projects[3].sourcecode} target="_blank" rel="noreferrer">
                            Source Code
                        </UrlButton>
                    </div>
                </ImageEvent>
            </Events>
        </Timeline>

      
    </div>
  )
}

export default Portfolio
