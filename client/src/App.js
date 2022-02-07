import './App.css';
import React, { useState } from "react";
import Axios from 'axios';

function App() {


  const [usernameReg, setUsernameReg] = useState(' ')
  const [passwordReg, setPasswordReg] = useState(' ')

  const register= () => {
     Axios.post('http://localhost:3001/register', {username: usernameReg, password: passwordReg})
     .then((response) =>  console.log(response))
  }

  return (
    <div className="App">
      <header className="App-header">
        
          <div className="App">
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input type="text" onChange={(e)=>{setUsernameReg(e.target.value)}}/><br/>
                <label>Password</label>
                <input type="password" onChange={(e)=>{setPasswordReg(e.target.value)}}></input><br/>
                <button onClick={register}>Register</button>
            </div>
          </div>
     
      
      </header>
    </div>
  );
}

export default App;
