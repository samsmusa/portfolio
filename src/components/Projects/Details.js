import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import CarouselSlide from './CarouselSlide';

function Details ({data}) {
  console.log(data)
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item disabled>
            <CarouselSlide images={data?.img_data} />
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Project Name</p>
                <p className="m-0 pt-1">{data?.name}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Github Url</p>
                <p className="m-0 pt-1">{data?.github}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Live Url</p>
                <p className="m-0 pt-1">{data?.live}</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup>
            <ListGroup.Item >
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Project Starting Date</p>
                <p className="m-0 pt-1">{data?.start_date}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Project Ending Date</p>
                <p className="m-0 pt-1">{data?.end_date}</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
            <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Description</p>
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