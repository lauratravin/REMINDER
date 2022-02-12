
import '../App.css';
import React, { useEffect, useState } from "react";
import Axios from 'axios';

function Home() {

  Axios.defaults.withCredentials = true;

 
  const [usernameLog, setUsernameLog] = useState(' ')
  const [passwordLog, setPasswordLog] = useState(' ')
  const [logginStatus, setLogginStatus] = useState(' ')

  

  const login= () => {
    Axios.post('http://localhost:3001/login', {username: usernameLog, password: passwordLog})
    .then((response) =>  {
      if (response.data.message){  setLogginStatus(response.data.message)} else { setLogginStatus(response.data[0].username)}
    })
 }

 useEffect( () => {
    Axios.get('http://localhost:3001/login').then( (response)=>{ 
    console.log(response)  
    if(response.data.loggedIn){ setLogginStatus(response.data.user[0].username) }})
 } , 
 []); //[] run only at initial render

  return (
       

          <div className="App">
           
            <div className="login">
                <h1>Login</h1>
                <label>Username</label>
                <input type="text" onChange={(e)=>{setUsernameLog(e.target.value)}}/><br/>
                <label>Password</label>
                <input type="password" onChange={(e)=>{setPasswordLog(e.target.value)}}></input><br/>
                <button onClick={login}>Login</button>
            </div>
            {logginStatus}
          </div>
     
      
     
   
  );
}

export default Home;
