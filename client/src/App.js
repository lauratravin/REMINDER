import './App.css';
import React, { useState } from "react";

function App() {


  const [usernameReg, setUsernameReg] = useState(' ')
  const [passwordReg, setPasswordReg] = useState(' ')

  return (
    <div className="App">
      <header className="App-header">
        
          <div className="App">
            <div className="registration">
                <h1>Registration</h1>
                <label>Username</label>
                <input type="text" onChange={(e)=>{setUsernameReg(e.target.value)}}/><br/>
                <label>Password</label>
                <input type="pasword" onChange={(e)=>{setPasswordReg(e.target.value)}}></input><br/>
                <button onClick={()=>{}}>Register</button>
            </div>
          </div>
     
      
      </header>
    </div>
  );
}

export default App;
