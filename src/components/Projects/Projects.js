import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import ProjectDetails from "./ProjectDetails";

function Projects() {
  return (
    <Container fluid className="project-section" style={{backgroundColor:"#2d1950"}}>
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Indibidual Parts manufacturer. parts sels, orders, review, and deshboard are included. Reactjs, HTML, CSS, Nodejs, and mongodb use."
              linkg="https://github.com/samsmusa/GunParts"
              linkl="https://gunparts-c9161.web.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ScholarUni"
              description="Site for scholarship and internship information for international students.html, css, javascript, django and mysql are use."
              linkg="https://github.com/samsmusa/django_site"
              linkl="https://Scholaruni.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Food Inventory"
              description="Inventory site for Food. whare vendor and user both have different kind of dashboard. Create update and delete product from dashbord.Reactjs, html, css , nodejs and mongodb use."
              linkg="https://github.com/samsmusa/NaturalFoodInventoryClient"
              linkl="https://natural-food-inventory.web.app/"
            />
          </Col>

          
        </Row>
      </Container>
      
    </Container>
  );
}

export default Projects;
