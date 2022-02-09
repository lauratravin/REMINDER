const express =  require('express');
const app = express();
const cors = require('cors')
const db = require('./db')

const bcrypt = require('bcrypt')
const saltRounds = 10


const bodyParser = requiere('body-parser')
const cookieParser = require('cookiePasrser')
const session = require('express-session')

app.use(cors())
app.use(express.json())



app.post('/register', (req, res)=> {
  const username= req.body.username;
  const password= req.body.password;
 

  bcrypt.hash(password,saltRounds, (err, hash) => {
    db.query("INSERT INTO login (username,password) VALUES (?,?)", [username, hash], (err, result) => {
      console.log(err)
    })
  })
 
});

app.post('/login', (req, res)=> {
  const username= req.body.username;
  const password= req.body.password;
  
  //db.query("SELECT * FROM login WHERE username = ? AND password= ?", [username, password], (err, result) => {
    
    db.query("SELECT * FROM login WHERE username = ?", username, (err, result) => {

    if (err){
       res.send({err: err}) //if error res sends error and stop
      } 

    if(result.length > 0){
    //  res.send(result)
    //we compare here if hask pass == password
          bcrypt.compare(password, result[0].password, (error, response ) => {
                if (response){
                  res.send(result)
                } else {
                  res.send({message:  "wrong username/password combination"})
                }

          })

    } else {
      res.send({message: "Wrong username"})
    }
    
  })
})




app.listen(3001,() => {
  console.log("reminder server running")
});