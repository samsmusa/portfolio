import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import ProjectDetails from "./ProjectDetails";
import { Modal } from "react-bootstrap";

function ProjectCards({data, isBlog}) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={data?.img_data[0].img} alt="card-img" />
      <Card.Body>
        <Card.Title>{data?.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <ul>
            <li>{data?.point1}</li>
            <li>{data?.point2}</li>
          </ul>
        </Card.Text>
        <Button className="my-2" variant="primary" href={data?.linkg} target="_blank">
          <BiLinkExternal /> &nbsp;
          {data?.isBlog ? "Blog(Github)" : "Project(Github)"}
        </Button> <br />
        <Button className="my-2" variant="primary" href={data?.linkl} target="_blank">
          <BiLinkExternal /> &nbsp;
          {isBlog ? "View Blog" : "View Project"}
        </Button>
      </Card.Body>
      <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
      <BiLinkExternal /> &nbsp;
      View Details
      </Button>
      <ProjectDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={data}
      />
      </>
    </Card>
  );
}
export default ProjectCards;
