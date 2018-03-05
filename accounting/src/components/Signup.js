import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Signup extends Component {
    state = {
        username:"",
        password:"",
        password_twice:""
    }
    handelSumbit = (e)=>{
        e.preventDefault();
            if(this.matchPassword){
                axios({
                    method:"post",
                    url:"http://localhost:8081/signup",
                    data:{
                        "username":this.state.username,
                        "password":this.state.password,
                        "password_twice":this.state.password,
                    }
                }).then(function(response){
                    if(response.status === 200 && response.data.valid === true){
                        window.localStorage.setItem("userToken",response.data.token.access)
                        window.localStorage.setItem("userPermission",response.data.token.permission)
                        window.location.href = "/login"
                    }
                }).catch(function(response){
                    console.log(response)
                })
            } else{
                console.log("Password Does not Match")
            }
    }
    handelUsernameChange = (e) =>{
        this.setState({username: e.target.value})
    }
    handelPasswordChange = (e) =>{
        this.setState({password: e.target.value})
    }
    handelPasswordTwiceChange = (e) =>{
        this.setState({password_twice: e.target.value})
    }
    matchPassword = () =>{
        if((this.state.username !== "") && (this.state.password !=="") && (this.state.password_twice !== "")){
            if( this.state.password === this.state.password_twice){
                return true
            } else {
                return false
            }
        }
    }
     
  render() {
    return (
      <div className="container">
      <legend>Sign Up</legend>
      <form action="" method="POST">
        <div className="form-group">
            <label htmlFor="username"> Username</label>
            <input required="required" className="form-control" id="username" type="text" placeholder="username@domain.com" value={this.state.username} onChange={(event)=>this.handelUsernameChange(event)} required/>
        </div>
        <div className="form-group">
            <label for="password"> Password</label>
            <input required="required" className="form-control" id="password" type="password" placeholder="password" value={this.state.password} onChange={(event)=>this.handelPasswordChange(event)} required/>
        </div>
        <div className="form-group">
            <label for="password"> Password Again</label>
            <input required="required" className="form-control" id="password_twice" type="password" placeholder="password again" value={this.state.password_twice} onChange={(event)=>this.handelPasswordTwiceChange(event)} required/>
        </div>
        <button type="submit" className="btn btn-success" onClick={(event)=>this.handelSumbit(event)}>Sign up</button>
      </form>
    </div>
    );
  }
}
export default Signup;
