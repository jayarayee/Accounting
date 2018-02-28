import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import CreateAccount from './components/CreateAccount';
import ListAccount from './components/ListAccounts';
import SingleAccount from './components/SingleAccount';
import {Header} from './components/NavBar';
import Account  from './components/Accounts';
import { Log } from './components/Logs';
import { Home } from './components/Home';
import { Edit } from './components/Edit';







class App extends Component {
    state = {
        all_accounts :[]
    }

    componentDidMount(){
        var _this = this;
        axios.get('http://localhost:3001/api')
          .then(function (response) {
            var data = response.data.all_accounts_list
            _this.setState({all_accounts: data})
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    
  render() {
    const all_data = this.state.all_accounts
    return (
      <div className="App">
        <Header/>
        <div className="">
          <Route exact path = "/chart_accounts" render={()=>(
            <div>
              <ListAccount all_accounts = {all_data}/>
            </div>
          )} />
		      <Route path ="/create" render={({history})=>(
            <div>
              <CreateAccount />
			      </div>
          )}/>
          <Route path ="/accounts" render={({history})=>(
            <div>
              <Account />
			      </div>
          )}/>
          <Route path ="/logs" render={({history})=>(
            <div>
              <Log />
			      </div>
          )}/>
          <Route path ="/home" render={({history})=>(
            <div>
              <Home />
            </div>
          )}/>
          <Route path ="/edit" render={({history})=>(
            <div>
              <Edit />
            </div>
          )}/>
		    </div>
      </div>
    );
  }
}
export default App;
