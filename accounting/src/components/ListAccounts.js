import React, { Component } from 'react';
import axios from 'axios';
import SingleAccount from './SingleAccount';
import {Search} from '../library/SearchBar';
import {CreateBnt} from '../library/CreatBnt';
import {Header} from '../components/NavBar'


//css
import "./css/ListAccount.css";
import { CreateBtn } from '../library/CreatBnt';

class ListAccount extends Component {
  render() {
    const {all_accounts} = this.props
    console.log(typeof(all_accounts))
    return (
      <div className="container">
      <legend className="" align="center" text-size=""><strong>Charts of Account</strong></legend>
      <Search/>

      <table className = "table table-stripped">
        <thead bgcolor="#393a3d" style={{ color: "white" }}>
          <tr>
            <td><strong>Account Code</strong></td>
            <td><strong>Account Name</strong></td>
            <td><strong>Normal Side</strong></td>
            <td><strong>Account Status</strong></td>
            <td><strong>Balance</strong></td>
            <td><strong>Actions</strong></td>
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
