import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
  Route,
  Switch,
  Redirect,
  // Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';

import Header from './components/header';
import Login from './components/login';
import Home from './components/home';

import './App.css';
import { firebase } from './auth/firebase-config';


class App extends Component {


  state = {
    isUserLogin: false,
    user: {},
  }

  componentDidMount() {

    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        isUserLogin: user !== null ? true : false,
        user: user !== null ? user.providerData[0] : {}
      });
      user !== null ? this.props.history.push('/home') : this.props.history.push('/login')
    });
  }
  provider = new firebase.auth.GoogleAuthProvider();


  doGoogleLogin = () => firebase.auth().signInWithPopup(this.provider);

  doGoogleLogout = () => firebase.auth().signOut();


  render() {
    return (
      <>
        <Header isUserLogin={this.state.isUserLogin} doGoogleLogout={this.doGoogleLogout} user={this.state.user} />
        <Switch>
          <Route path="/login" component={() => <Login doGoogleLogin={this.doGoogleLogin} />} />
          <Route path="/home" component={() => <Home />} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </>
    );
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
}

export default withRouter(App);
