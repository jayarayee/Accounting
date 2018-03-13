import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './css/custome.css'
import Spinner from '../library/Spinner'
import logo from '../res/logo.png'


class Login1 extends Component {
  render() {
    return (
        <div className="fill-page dark-blue-background">
        <div className="login-container">
            <div className="login-header"><img src={logo} alt="bluePrint" height="50"/></div>
            <Spinner id="login-spinner"/>
            <form id="form" className="login-form">
                <hr/>
                <div className="form-group">
                    <label className="login-label" htmlFor="username">Username: <span style={{color: "red"}}></span></label>
                    <input id="username" type="text" className="login-text form-control" required="true" 
                        onChange={event => this.setState({ username: event.target.value, usernameError: "" })}/>
                </div>
                <div className="form-group">
                    <label className="login-label" htmlFor="password">Password: <span style={{color: "red"}}></span></label>
                    <input id="password" type="password" className="login-text form-control" 
                        onChange={event => this.setState({ password: event.target.value, passwordError: "" })}/>
                </div>
                <hr/>
                <button type="submit" className="login-btn btn"
                    onClick={e => {e.preventDefault(); this.authenticateCredentials()}}>
                    LOGIN
                </button>
            </form>
        </div>
    </div>
    
    );
  }
}
export default Login1;
