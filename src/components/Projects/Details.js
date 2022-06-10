import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import imag from "../../Assets/Projects/chatify.png";

const Details = () => {
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
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Github Url</p>
                <p className="m-0 pt-1">kdjfdkfj</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Live Url</p>
                <p className="m-0 pt-1">kdjfdkfj</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item >
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Project Starting Date</p>
                <p className="m-0 pt-1">kdjfdkfj</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Project Ending Date</p>
                <p className="m-0 pt-1">kdjfdkfj</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Description</p>
                <p className="m-0 pt-1">kdjfdkfj</p>
              </div>
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;