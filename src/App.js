import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase'
import { NavBar, SideBar } from "./components";
import { Home, Menu, Info, Contact } from './views'
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
        <div className='contanier'>
          {/* <div class="row" > */}
            {/* <div className='col-12'> */}
              <NavBar />
            {/* </div> */}
          {/* </div> */}
          <div className="row no-gutters">
            <div className='col-sm-12 col-md-2 navbar-left' style={{ backgroundColor: '#343a40' }}>
              <SideBar />
            </div>
            <div className='col-sm-12 col-md-10' style={{}}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/information" component={Info} />
                <Route path="/menu" component={Menu} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
