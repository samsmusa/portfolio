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
import LoadData from "../LoadData";

function Projects() {
  const [data, setData] = LoadData()
  console.log(data)
  return (
    <Container fluid className="project-section" style={{ backgroundColor: "#2d1950" }}>
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {data?.map(e => <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              data={e}
            />
          </Col>)}


        </Row>
      </Container>

    </Container>
  );
}

export default Projects;
