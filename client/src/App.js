import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Axios from 'axios';
import Home from './pages/Home.js';
import About from './pages/About';
import Register from './pages/Register';
import PageNotFound from './pages/PageNoFound';
import Calendar from './pages/Calendar';
import { useHistory } from "react-router-dom";

function App() {

  Axios.defaults.withCredentials = true;

  let history = useHistory()
  
  const logout = () => {
    Axios.get('http://localhost:3001/logout').then((response) =>  {
        console.log(response);
        
      }).then(() => {
        console.log(history)
        history.push('/') }     
      )
   
    
  }

  return(
    <>
      <Router>
      <div style={{ height: 100, backgroundColor: "yellow"}}>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/about">About</Link>
        <button onClick={ logout }>Log Out</button>
        {/* <form action="http://localhost:3001/logout" method="POST">
        <button >Log Out</button>
        </form> */}
       
       
      </div>
    
          <Switch>
            <Route path="/" exact component={Home}  />
            <Route path="/about" exact component={About} />
            <Route path="/register" exact component={Register} />
            <Route path="/calendar" exact component={Calendar} />
            <Route path="*" exact component={PageNotFound} />
            
          </Switch>
      </Router>
   </>
  )  
}

export default App;
