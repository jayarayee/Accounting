import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';


class Login extends Component {
    state = {
        username:"",
        password:"",
        // isLoggedIn: window.localStorage.getItem("isLoggedIn") || false
    }
    handelSumbit = (e)=>{
        axios({
            method:"post",
            url:"http://localhost:8081/login",
            data:{
                "username":this.state.username,
                "password":this.state.password,
            }
        }).then(function(response){
            if(response.data.isLoggedIn){
                window.localStorage.setItem("userToken",response.data.token.access)
                window.localStorage.setItem("userPermission",response.data.token.permission)
                window.location.href="/home"
            }
        }).catch(function(error){

        })
    }
    handelUsernameChange = (e) =>{
        this.setState({username: e.target.value})
    }
    handelPasswordChange = (e) =>{
        this.setState({password: e.target.value})
    }
  
  render() {
    return (
      <div className="container">
        <legend>Login</legend>
            <form action="" method="POST">
            <div className="form-group">
                <label htmlFor="username"> Email</label>
                <input  className="form-control" id="username" type="text" placeholder="username@domain.com" value={this.state.username} onChange={(event)=>this.handelUsernameChange(event)} required/>
            </div>
            <div className="form-group">
                <label htmlFor="password"> Password</label>
                <input  className="form-control" id="password" type="password" placeholder="password" value={this.state.password} onChange={(event)=>this.handelPasswordChange(event)} required/>
            </div>
            </form>
            <button className="btn btn-success" onClick={(event)=>this.handelSumbit(event)}>Login</button>
      </div>
    );
  }
}
export default Login;
