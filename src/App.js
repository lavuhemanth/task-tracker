import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  // Link
} from "react-router-dom";

import Header from './components/header';
import Login from './components/login';
import Home from './components/home';

import './App.css';

function App() {
  return (

    <div>
      <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Redirect from="/" exact to="/home" />
      </Switch>
    </div>
  );
}

export default App;
