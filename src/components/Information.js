import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Information(props) {

    const [selectedCategory, setSelectedCategory] = useState("");

    const navigate = useNavigate();

    const handleChange=(e)=>{
        props.setName(e.target.value);
    }

    const handleButtonClick = (e) => {
        const category = e.target.value;
        props.setCategory(category);
        setSelectedCategory(category); 
    };

    const handleClick= (e)=>{
        
        e.preventDefault();

        if(!props.name){
            props.setShowAlert(true);
            return;
        }
        props.setShowAlert(false)
        navigate("/question")
    }

  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{minHeight:"100vh"}}>
        <div className="card text-center" style={{width:"90%"}}>
            <div className="card-header" style={{backgroundColor:"#7732a8",color:"white",fontSize:"2rem",fontFamily:"Dancing Script, serif"}}>
                Quizilla
            </div>
            <div className="card-body">
                <form className="container-fluid" >
                    <div className="input-group">
                    <span className="input-group-text" id="basic-addon1">Name</span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" onChange={handleChange} value={props.name} style={{outline:"none"}}/>
                    </div>
                </form>
                <p className="card-text" style={{marginTop:"5px"}}>🌟 Best of Luck! 🌟</p>
                <p className="card-text">Wishing you all the success in your quiz! 🏆 Stay confident, trust your knowledge, and give it your best shot. You've got this! 💪🎯</p>
                <div>
                        {["React", "JavaScript", "HTML", "Django", "cPanel", "nodeJS"].map(category => (
                            <button
                                key={category}
                                type="button"
                                className={`btn btn-outline-secondary mb-2 mx-2 ${selectedCategory === category ? "btn-primary text-white" : ""}`}
                                value={category}
                                onClick={handleButtonClick}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                <Link to="/question" className="btn btn-primary" onClick={handleClick}>Start Quiz</Link>
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
