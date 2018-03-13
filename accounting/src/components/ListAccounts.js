import React, { Component } from 'react';
import axios from 'axios';
import SingleAccount from './SingleAccount';
import {Search} from '../library/SearchBar';
import {CreateBnt} from '../library/CreatBnt';
import {Header} from '../components/NavBar'
// //css
// import "./css/ListAccount.css";
import { CreateBtn } from '../library/CreatBnt';

class ListAccount extends Component {
  state = {
    all_accounts:[]
  }

  componentDidMount(){
    var userToken = window.localStorage.getItem("userToken") || ""
    var userPermission = window.localStorage.getItem("userPermission") || ""
    console.log("userToken from chars of Account", userToken)

      var _this = this;
      axios({
        method:"get",
        url:"http://localhost:8081/api",
        headers:{
          "Authorization":userToken
        }
      }).then(function (response) {
          var data = response.data.all_accounts_list
          _this.setState({all_accounts: data})
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  render() {
    const {all_accounts} = this.state
    return (
      <div className="container">
      <legend className="" align="center" text-size=""><strong>Charts of Account</strong></legend>
      <Search/>
      <table className= "table table-stripped">
        <thead bgcolor="#393a3d" style={{ color: "white" }}>
          <tr>
            <td><strong>CODE</strong></td>
            <td><strong>NAME</strong></td>
            <td><strong>TYPE</strong></td>
            <td><strong>DETAIL TYPE</strong></td>
            <td><strong>SIDE</strong></td>
            <td><strong>STATUS</strong></td>
            <td><strong>BALANCE</strong></td>
            <td><strong>ACTION</strong></td>
          </tr>
        </thead>
        <tbody>
          {all_accounts.map((account, index)=>{
            return (
              <SingleAccount key = {account._id} single = {account}/>
          );
          })}
        </tbody>
      </table>
      </div>
    );
  }
}
export default ListAccount;
