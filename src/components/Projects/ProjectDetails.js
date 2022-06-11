import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Details from './Details';
import Technologies from './Technologies';

const ProjectDetails = (props) => {
  const [details, setDetails] = useState(true)
  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <p className='fs-6'><span onClick={()=>setDetails(true)} className='mx-1 p-1 btn btn-sm btn-primary' style={{cursor:'pointer'}}>PROJECT DETAILS</span> <span onClick={()=>setDetails(false)} style={{cursor:'pointer'}} className='mx-1 p-1 btn btn-sm btn-primary'>PROJECT TECH</span></p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {details ? <Details data={props?.data}  /> : <Technologies data={props?.data} />}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectDetails;