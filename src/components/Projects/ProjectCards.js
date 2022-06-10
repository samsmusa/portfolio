import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import ProjectDetails from "./ProjectDetails";
import { Modal } from "react-bootstrap";

function ProjectCards(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button className="my-2" variant="primary" href={props.linkg} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "Blog(Github)" : "Project(Github)"}
        </Button> <br />
        <Button className="my-2" variant="primary" href={props.linkl} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
      <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <ProjectDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </>
    </Card>
  );
}
export default ProjectCards;
