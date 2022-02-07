import './App.css';
import React, { useState } from "react";
import Axios from 'axios';

function App() {


  const [usernameReg, setUsernameReg] = useState(' ')
  const [passwordReg, setPasswordReg] = useState(' ')
  const [usernameLog, setUsernameLog] = useState(' ')
  const [passwordLog, setPasswordLog] = useState(' ')

  const register= () => {
     Axios.post('http://localhost:3001/register', {username: usernameReg, password: passwordReg})
     .then((response) =>  console.log(response))
  }

  const login= () => {
    Axios.post('http://localhost:3001/login', {username: usernameLog, password: passwordLog})
    .then((response) =>  console.log(response))
 }

  return (
    
    
        
          <div className="App">
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input type="text" onChange={(e)=>{setUsernameReg(e.target.value)}}/><br/>
                <label>Password</label>
                <input type="password" onChange={(e)=>{setPasswordReg(e.target.value)}}></input><br/>
                <button onClick={register}>Register</button>
            </div>
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input type="text" onChange={(e)=>{setUsernameLog(e.target.value)}}/><br/>
                <label>Password</label>
                <input type="password" onChange={(e)=>{setPasswordLog(e.target.value)}}></input><br/>
                <button onClick={login}>Login</button>
            </div>
          </div>
     
      
     
   
  );
}

export default App;
