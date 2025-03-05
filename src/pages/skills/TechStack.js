import React from "react";
//React Bootstrap components
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
//Skill set data
import { skills } from "./Skills";
//Styles
import "./TechStack.css";

const TechStack = () => {
  return (
    <div id="techstack" className="techstack">
      <h1 className="pt-3 text-center font-details pb-3">TECH STACK</h1>
      <CardDeck>
        <Row className="justify-content-around d-flex">
          {/**Front-end */}
          <Col md={4} xs={12}>
            <Card className="focus mt-2 mb-2" bg="dark" text="white">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Front-End
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.frontend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      {skill.skillName}
                      <ProgressBar now={skill.skillLevel} animated />
                    </span>
                  ))}
                  {/* <ProgressBar animated now={45}/> */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/*Back-end & Cloud services*/}
          <Col md={4} xs={12}>
            <Card className="focus mt-2 mb-2" bg="dark" text="white">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Back-End
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.backend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      {skill.skillName}
                      <ProgressBar
                        now={skill.skillLevel}
                        animated
                        variant="info"
                      />
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="focus mt-2 mb-2" bg="dark" text="white">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Cloud Services
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.cloudServices.map((skill, index) => (
                    <span className="p-2" key={index}>
                      {skill.skillName}
                      <ProgressBar
                        now={skill.skillLevel}
                        animated
                        variant="warning"
                      />
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/**Database & OrderCare Management */}
          <Col md={4} xs={12}>
            <Card className="focus mt-2 mb-2" bg="dark" text="white">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Database
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.db.map((skill, index) => (
                    <span className="p-2" key={index}>
                      {skill.skillName}
                      <ProgressBar
                        now={skill.skillLevel}
                        animated
                        variant="success"
                      />
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="focus mt-2 mb-2" bg="dark" text="white">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  OrderCare Management
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.ordercareManagement.map((skill, index) => (
                    <span className="p-2" key={index}>
                      {skill.skillName}
                      <ProgressBar now={skill.skillLevel} animated />
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/**Test Driven Development */}
          <Col md={4} xs={12}>
            <Card className="focus mt-2 mb-2" bg="dark" text="white">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Test Driven Development (TDD)
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.testDrivenDevelopment.map((skill, index) => (
                    <span className="p-2" key={index}>
                      {skill.skillName}
                      <ProgressBar
                        now={skill.skillLevel}
                        animated
                        variant="info"
                      />
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/**OrderCareManagement*/}
          {/* <Col md={4} xs={12}>
                    <Card className="focus mt-2 mb-2" bg="dark" text="white">
                        <Card.Body>
                            <Card.Title className="text-center card-title">OrderCare Management</Card.Title>
                            <hr/>
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.ordercareManagement.map((skill, index)=>(
                                    <span className="p-2" key={index}>{skill.skillName}
                                        <ProgressBar now={skill.skillLevel} animated />
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}
          {/**Cloud Services */}
          {/* <Col md={4} xs={12}>
                    <Card className="focus mt-2 mb-2" bg="dark" text="white">
                        <Card.Body>
                            <Card.Title className="text-center card-title">Cloud Services</Card.Title>
                            <hr/>
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.cloudServices.map((skill,index)=>(
                                    <span className="p-2" key={index}>{skill.skillName}
                                        <ProgressBar now={skill.skillLevel} animated variant="warning"/>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}
          {/**Version Control & Project Managment */}
          <Col md={4} xs={12}>
            <Card className="focus mt-2 mb-2" bg="dark" text="white">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Version Control
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.versionControl.map((skill, index) => (
                    <span className="p-2" key={index}>
                      {skill.skillName}
                      <ProgressBar
                        now={skill.skillLevel}
                        animated
                        variant="info"
                      />
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card className="focus mt-2 mb-2" bg="dark" text="white">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Project Management Tools
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skills.projectManagementTools.map((skill, index) => (
                    <span className="p-2" key={index}>
                      {skill.skillName}
                      <ProgressBar
                        now={skill.skillLevel}
                        animated
                        variant="success"
                      />
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/**Project management */}
          {/* <Col md={4} xs={12}>
                    <Card className="focus mt-2 mb-2" bg="dark" text="white">
                        <Card.Body>
                            <Card.Title className="text-center card-title">Project Management Tools</Card.Title>
                            <hr/>
                            <Card.Text className="card-text d-flex justify-content-start flex-column">
                                {skills.projectManagementTools.map((skill, index)=>(
                                    <span className="p-2" key={index}>{skill.skillName}
                                        <ProgressBar now={skill.skillLevel} animated variant="success"/>
                                    </span>
                                ))}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> */}
        </Row>
      </CardDeck>
    </div>
  );
};

export default TechStack;
