import React from 'react';
import {Link} from 'react-router-dom'
import './css/custome.css'
import axios from 'axios';
import logo from '../res/logo.png'

function logoutUser(e){
  e.preventdefault();
    axios({
      method:"post",
      url:"http://localhost:8081/logout",
      data:{
          "username":"kapil",
      }
    }).then(function(response){
        console.log(response)
    }).catch(function(error){
        console.log(error)
    })
  } 

export const Header = (props) =>{
    return(
        <nav className="navbar navbar-expand navbar-primary">
          <header className="navbar-brand" href="/home"><img src={logo} alt="bluePrint" height="60"/></header>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link active" href="/home">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"href="/chart_accounts">Charts of Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/accounts">Accounts</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/logs">Logs</a>
          </li>

          </ul>
          
        </div>
        <div className="pull-right">
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="/login"><span className="glyphicon glyphicon-user"></span>Login</a>
            </li>
          </ul>
        </div>
      </nav>
      
    );
};