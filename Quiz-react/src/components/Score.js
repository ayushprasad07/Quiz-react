import React from 'react'

export default function Score(props) {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{minHeight:"100vh"}}>
      <div className="card" style={{width:"90%"}}>
        <h5 className="card-header" style={{backgroundColor:"#7732a8",color:"white",fontSize:"2rem",fontFamily:"Dancing Script, serif"}}>Quizilla</h5>
        <div className="card-body">
            <h5 className="card-title">You Scored : {props.score}/10</h5>
            <p className="card-text">Thank you for using Quizilla {props.name}! </p>
            <p className="card-text">🌟 Keep challenging yourself, keep learning 📚, and continue growing every day 🌱.</p>
            <p className="card-text">Knowledge is the key to unlocking your potential—stay curious 🔍 and unstoppable 🚀!</p>
        </div>
        <div className="card-footer " style={{backgroundColor:"#7732a8",color:"white"}}>
                <div className='d-flex justify-content-around align-items-center'>
                  <div className='d-flex justify-content-around align-items-center' style={{width:"50%"}}>
                      <a href="https://github.com/ayushprasad07"><i className="bi bi-github" style={{cursor:"pointer",fontSize:"1.5rem",color:"white"}}></i></a>
                      <a href="https://www.linkedin.com/in/ayush-prasad-101859326/"><i className="bi bi-linkedin" style={{cursor:"pointer",fontSize:"1.5rem",color:"white"}}></i></a>
                  </div>
                </div>
            </div>
      </div>
    </div>
  )
}
