import React from 'react';
import { ListGroup, ProgressBar } from 'react-bootstrap';

const TechProg = (props) => {
  const {id} = useParams()
  const data = [
    {
      id: 1,
      name: 'musa'
    },
    {
      id: 1,
      name: 'musa'
    },
    {
      id: 1,
      name: 'musa'
    }
  ]

  let nesData = data.find(e=>e.id===1)
  return (
    <ListGroup.Item >
      <div>
        <p className='m-0 p-0 ' style={{ fontSize: "10px", color: "dimgray" }}>{props.name}</p>
        <ProgressBar now={props.value} label={`${props.value}%`} visuallyHidden />
      </div>
    </ListGroup.Item>
  );
};

export default TechProg;