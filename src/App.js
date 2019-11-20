import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'
import { NavBar, SideBar } from "./components";
import { Home, Test, Info } from './views'
import { firestore } from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <SideBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/information" component={Info} />
        <Route path="/menu" component={Test} />
       </Switch> 
    </div>
    </Router>
  );
}

export default App;
