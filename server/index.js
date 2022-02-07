const express =  require('express');
const app = express();
const cors = require('cors')
const db = require('./db')

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

app.listen(3001,() => {
  console.log("reminder server running")
});