import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import CreateAccount from './components/CreateAccount';
import ListAccount from './components/ListAccounts';
import SingleAccount from './components/SingleAccount';
import {Header} from './components/NavBar';
import Account  from './components/Accounts';
import { Log } from './components/Logs';
import Home from './components/Home';
import { Edit } from './components/Edit';
import Login from './components/Login';
import Signup from './components/Signup';
import JournalTable from './components/JournalTable';



class App extends Component {  
  render() {
    return (
      <div className="App">
        <div className="">
        <Header/>
          <Route exact path = "/chart_accounts" render={()=>(
              <ListAccount />
          )} />
		      <Route exact path ="/create" render={({history})=>(
              <CreateAccount />
          )}/>
          <Route exact path ="/accounts" render={({history})=>(
              <Account />
          )}/>
          <Route exact path ="/logs" render={({history})=>(
              <Log />
          )}/>
          <Route exact path ="/home" render={({history})=>(
              <Home />
          )}/>
          <Route exact path ="/edit" render={({history})=>(
              <Edit />
          )}/>
          <Route exact path ="/journal" render={({history})=>(
              <JournalTable />
          )}/>
        </div>
        <Route exact path ="/" render={({history})=>(
            <Login />
        )}/>
        <Route exact path ="/login" render={({history})=>(
          <Login />
      )}/>
        <Route exact path ="/signup" render={({history})=>(
            <Signup />
        )}/>
    </div>
    );
  }
}
export default App;
