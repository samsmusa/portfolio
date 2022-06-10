import React from 'react';
import { Col, Container, ListGroup, ProgressBar, Row } from 'react-bootstrap';

import imag from "../../Assets/Projects/chatify.png";

const Technologies = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item disabled>
              <img src={imag} className="img-fluid" />
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Project Name</p>
                <p className="m-0 pt-1">kdjfdkfj</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Technologies</p>
                <p className="m-0 pt-1">kjkj</p>
              </div>
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            
            <ListGroup.Item>
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Reactjs</p>
                <ProgressBar now={60} label={`${60}%`} visuallyHidden />
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>HTML</p>
                <ProgressBar now={60} label={`${60}%`} visuallyHidden />
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>CSS</p>
                <ProgressBar now={60} label={`${60}%`} visuallyHidden />
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>HTML</p>
                <ProgressBar now={60} label={`${60}%`} visuallyHidden />
              </div>
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Technologies;