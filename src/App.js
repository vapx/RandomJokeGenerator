import React from "react";
import "./styles.css";
import Nav from "./Navigation/Nav";
import About from "./Navigation/About";
// import Login from "./Navigation/Login";
// import Gallery from "./components/Page1";
import Joke from "./components/Joke";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";



export default function App(){
  return(
    <Router>
      <Nav/>
    <Switch>
      <Route path="/" exact component={Home}/> 
      <Route path="/about" component={About}/>
      <Route path="/joke"  component={Joke}/>
    </Switch>
    </Router>
  )
}

function Home(){
  return(
    <div className="home">
      <h1>Welcome to Random Joke Generator</h1>
    </div>
  )
}
