import React from 'react';
import { Col, Container, ListGroup, ProgressBar, Row } from 'react-bootstrap';
import CarouselSlide from './CarouselSlide';

const Technologies = ({ data }) => {
  function Technologies_name(arr) {
    let tech = '';
    arr.forEach(e => {
      tech += `| ${e?.name} |`
    }
    )
    return tech
  }
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
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>Technologies</p>
                <p className="m-0 pt-1">{Technologies_name(data?.tech)}</p>
              </div>
            </ListGroup.Item>

          </ListGroup>
        </Col>
        <Col>
          <ListGroup>

            {
              data?.tech.map(e=>
                <ListGroup.Item>
              <div>
                <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>{e?.name}</p>
                <ProgressBar now={e?.value} label={`${e?.value}%`} visuallyHidden />
              </div>
            </ListGroup.Item>
              )
            }
            

          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Technologies;