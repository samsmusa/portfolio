import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import CarouselSlide from './CarouselSlide';

function Details ({data}) {
  console.log(data)
  return (
    <Container >
      <Row>
        <Col>
          <ListGroup className="bg-transparent text-white">
            <ListGroup.Item disabled className="bg-transparent border-white">
            <CarouselSlide images={data?.img_data} />
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-white">
              <div className="text-white">
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "white" }}>Project Name</p>
                <p className="m-0 pt-1">{data?.name}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-white">
              <div className="text-white">
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "white" }}>Github Url</p>
                <p className="m-0 pt-1">{data?.github}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent border-white">
              <div className="text-white">
                <p className='m-0 p-0 text-white' style={{ fontSize: "10px", color: "white" }}>Live Url</p>
                <p className="m-0 pt-1">{data?.live}</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup className="bg-transparent text-white">
            <ListGroup.Item className="bg-transparent text-white border-white">
            <div className="text-white">
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "white" }}>Project Starting Date</p>
                <p className="m-0 pt-1">{data?.start_date}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-white border-white">
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "white" }}>Project Ending Date</p>
                <p className="m-0 pt-1">{data?.end_date}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="bg-transparent text-white border-white">
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "white" }}>Description</p>
                <ul className="m-0 pt-1">
                  <li>{data?.point1}</li>
                  <li>{data?.point2}</li>
                  <li>{data?.point3}</li>
                  <li>{data?.point4}</li>
                  <li>{data?.point5}</li>
                </ul>
              </div>
            </ListGroup.Item>
            
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;