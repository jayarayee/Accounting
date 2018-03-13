import React, { Component } from 'react'
import Login1 from './Login.1';
import JournalTable from './JournalTable'

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
         <a href ="/create" className="btn btn-success margin-10">Create Account</a>
         <a href="/journal" className="btn btn-success margin-10">Journalize</a>
         <a className="btn btn-success margin-10">Post Account</a>
        </div>
      </div>
    );
  }
}
export default Home;
