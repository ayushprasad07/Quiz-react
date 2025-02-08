import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Questions from './components/Questions';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Information from './components/Information';
import Alert from './components/Alert';
import Score from './components/Score';

function App() {
  const [name,setName] = useState("");
  const [showAlert,setShowAlert] = useState(false);
  const [score,setScore] = useState(0);
  const [category,setCategory] = useState("");
  
  const apikey = process.env.REACT_APP_QUIZ_API_KEY
  
  return (
    <Router>
    <div className="App">
      <Navbar/>
      {showAlert && <Alert/>}
        <Routes>
            <Route path="/" element={<Information name={name} setName={setName} setShowAlert={setShowAlert} setCategory={setCategory}/>}/>
            {name && 
            <Route path="/question" element={<Questions name={name} apikey = {apikey} setScore={setScore} score={score} category={category}/>}/>}
            <Route path="/score" element={<Score name={name} score={score}/>}/>
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
