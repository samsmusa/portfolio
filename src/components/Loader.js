import React from 'react';

const Loader = () => {
  return (
    <div class="position-absolute top-50 start-50 " style={{zIndex:"1000"}}>
      <div class="spinner-grow" role="status" style={{width:"5rem", height:"5rem"}}>
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;