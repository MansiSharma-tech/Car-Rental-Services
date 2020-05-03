import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import BD from './components/BD';
import AD from './components/AD';
import MD from './components/MD';
import VD from './components/VD';
import Form from './components/Form';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

 class App extends Component {
  render(){
  return (
  	<Router>
    <div className="App">
     <Nav />
     <Route path="/home" component={Home} />
    <Route path="/contact" component={Contact} />    
    <Route path="/Form" component={Form} />    
    <Route path="/AD" component={AD} />    
    <Route path="/MD" component={MD} />    
    <Route path="/VD" component={VD} />    
    <Route path="/BD" component={BD} />    

     </div>
     </Router>
     );

}
}
export default App;

