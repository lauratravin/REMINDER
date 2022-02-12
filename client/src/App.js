import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from './pages/Home.js';
import About from './pages/About';
import Register from './pages/Register';
import PageNotFound from './pages/PageNoFound';

function App() {

  return(
   
   <Router>
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/about" exact component={About} />
        <Route path="/register" exact component={Register} />
        <Route path="*" exact component={PageNotFound} />
        


      </Switch>
   </Router>
  )  
}

export default App;
