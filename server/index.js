const express =  require('express');
const app = express();
const cors = require('cors')
const db = require('./db')

app.use(cors())
app.use(express.json())

app.listen(3001,() => {
  console.log("reminder server running")
});