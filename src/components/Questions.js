import React, { useEffect, useState,useCallback } from 'react'
import QueCard from './QueCard';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

export default function Questions(props) {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    const fetchQuestions = useCallback(async () => {
        const url = `https://quizapi.io/api/v1/questions?apiKey=${props.apikey}&limit=10&tags=${props.category}&pageSize=10`;
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setLoading(false);
    }, [props.category,props.apikey]); 

    useEffect(() => {
        fetchQuestions();
    }, [fetchQuestions]);
      

  return (
    <div className=" d-flex justify-content-center align-items-start " style={{minHeight:"100vh"}}>
        <div className="card text-center" style={{
            width:"80rem",marginBottom:"2rem",marginTop:"5rem"
        }}>
            <div className="card-header" style={{backgroundColor:"#7732a8",color:"white",fontHeight:"5rem",fontFamily:"Dancing Script, serif",fontSize:"2rem"}}>
                Hello {props.name}! Here are the question for your quiz
            </div>
            <div className="card-body">
                {loading && <Spinner/>}
                {data.map((element) => (
                    <div className="card-body" key={element.id}>
                    <QueCard que={element.question} answers={element.answers} id={element.id} correctAnswer={element.correct_answers} score={props.score} setScore={props.setScore}/>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-start align-items-start mx-4 my-2" >
                <Link className="btn btn-primary" to="/score" role="button">Submit</Link>
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
