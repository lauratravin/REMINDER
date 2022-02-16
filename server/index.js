const express =  require('express');
const app = express();
const cors = require('cors')
const db = require('./db')

const bcrypt = require('bcrypt')
const saltRounds = 10



const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')

//change for sessions
app.use(cors({
   origin: ["http://localhost:3000"],
   methods: ["GET", "POST"],
   credentials: true

}))
app.use(express.json()) //middleware
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true }))

app.use(session({
  key: "userId", //name of the cookie
  secret: "reminder",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24 //24 hs in sec
  },
}))



//registration

app.post('/register', (req, res)=> {
  const username= req.body.username;
  const password= req.body.password;

  bcrypt.hash(password,saltRounds, (err, hash) => {
    db.query("INSERT INTO login (username,password) VALUES (?,?)", [username, hash], (err, result) => {
      console.log(err)
    })
  })
 
});

//login
app.get('/login', (req, res) => {
  //question if user is login or not
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user})
  } else {
    res.send({loggedIn: false})
  }
     
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
                  req.session.user = result  //creating the session
                  console.log(req.session.user)
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



//logout

app.get('/logout',(req, res)=>{
      req.session.destroy( (err) => {
        if(err) throw err;
        res.send( {message: "ok"})
      });
});





//server up

app.listen(3001,() => {
  console.log("reminder server running")
});