import React from 'react';

export default function Alert() {
  return (
    <div >
      <div className="alert alert-danger" role="alert" style={{height:"50px",position:"fixed",width:"100%"}}>
        Please! Enter your name
      </div>
    </div>
  );
}
