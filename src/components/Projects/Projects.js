import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
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
