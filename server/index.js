const express =  require('express');
const app = express();
const cors = require('cors')
const db = require('./db')

const bcrypt = require('bcrypt')
const saltRounds = 10

app.use(cors())
app.use(express.json())



app.post('/register', (req, res)=> {
  const username= req.body.username;
  const password= req.body.password;
  console.log("username: ", username, "password: ", password  )
  db.query("INSERT INTO login (username,password) VALUES (?,?)", [username, password], (err, result) => {
    console.log(err)
  })
})

app.post('/login', (req, res)=> {
  const username= req.body.username;
  const password= req.body.password;
  
  db.query("SELECT * FROM login WHERE username = ? AND password= ?", [username, password], (err, result) => {
    
    if (err){
       res.send(err) //if error res sends error and stop
      } 
    if(result.length > 0){
      res.send(result)
    } else {
      res.send({message: "Wrong username/password"})
    }
    
  })
})




app.listen(3001,() => {
  console.log("reminder server running")
});