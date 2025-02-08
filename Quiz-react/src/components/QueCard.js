import React, { useState } from "react";

export default function QueCard({ que, answers, id, correctAnswer ,score,setScore}) {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const options = Object.entries(answers)
    .filter(([key, value]) => value !== null)
    .map(([key, value]) => ({ key, value }));

  const correctOptions = Object.entries(correctAnswer)
    .filter(([key, value]) => value === "true") 
    .map(([key]) => key.replace("_correct", "")); 

  // console.log("Correct Options:", correctOptions);

  const handleChange = (e) => {
    const selectedKey = e.target.value;
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [id]: selectedKey,
    }));
    // console.log("You have selected:", selectedKey);
    if (correctOptions.includes(selectedKey)) {
      // console.log("✅ Correct Answer!");
      setScore(prevScore => prevScore + 1);
    } else {
      // console.log("❌ Wrong Answer!");
    }
  };

  return (
    <div>
      <div className="card" style={{ width: "100%" }}>
        <div className="card-body" style={{ textAlign: "start" }}>
          <p className="card-text">{que}</p>

          {options.map(({ key, value }) => (
            <div key={key} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name={`question-${id}`}
                id={`option-${id}-${key}`}
                style={{ cursor: "pointer" }}
                value={key}
                onChange={handleChange}
                checked={selectedAnswers[id] === key}
              />
              <label className="form-check-label" htmlFor={`option-${id}-${key}`}>
                {value}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
