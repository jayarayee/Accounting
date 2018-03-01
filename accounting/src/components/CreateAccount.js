import React, { Component } from 'react';
import axios from 'axios';
import './css/CreateAccount.css'

class CreateAccount extends Component {
    state = {
        account_name:"",
        normal_side:"",
        account_status:false,
        initial_balance:0

    }
   handelAccountName = function(e){
        this.setState({account_name:e.target.value})
        console.log(this.state.account_name)
    }
    handelNormalSide = function(e){
        this.setState({normal_side:e.target.value})
    }
    handelAccountStatus = function(e){
        this.setState({account_status:e.target.checked})
    }
    handelInitalbalance = function(e){
        this.setState({initial_balance:e.target.value})
    }

    submitForm = function(e){
        
        axios({
            method:"post",
            url:"http://localhost:3001/api",
            data:{
                "account_name":this.state.account_name,
                "normal_side":this.state.normal_side,
                "account_status":this.state.account_status,
                "initial_balance": this.state.initial_balance
            }
        }).then(function(response){
            console.log(response)
        }).catch(function(response){
            console.log(response)
        })
    }
    
  render() {
    
    return (
      <div className="App">
      <div className="col-md-3 cols-md-offset-3">
      <form id="create-account" method="POST" action="">
          <div className="form-group">
              <label htmlFor="account_name">Account Name</label>
              <select id="account_name" className="form-control" value={this.state.account_name} onChange={(event)=>this.handelAccountName(event)}>
              <option value="" disabled>--Account Type--</option>  
                <option value="cash">Cash</option>
                <option value="office-equipments">Office Equipments</option>
                <option value="notes-payable">Notes Payable</option>
                <option value="delivery-fees">Delivery Fees</option>
                <option value="purchases">Purchases</option>
              </select> 
          </div>
          <div className="form-group">
              <label>
                  Normal Side
              </label>
              <select id="normal_side" className="form-control" value = {this.state.normal_side} onChange={(event)=>this.handelNormalSide(event)}> 
              <option value="" disabled>--</option>  
              <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
          </div>
          <div className="form-group">
              <label>
              Is Active:
              </label>
              <input id="account_status" className="form-control" type="checkbox"  onChange={(event)=>this.handelAccountStatus(event)}/>
          </div>
          <div className="form-group">
              <label>
                  Initial Balance
              </label>
              <input id="inital_balance" className="form-control" type="text" value={this.state.initial_balance} onChange={(event)=>this.handelInitalbalance(event)}/>
              
          </div>
          <div class="row">
            <div className="btn-group">
                <button className="btn btn-success" type="button" onClick={(event)=>this.submitForm(event)}>Cancle</button>
                <button className="btn btn-success" type="button" onClick={(event)=>this.submitForm(event)}>Submit</button>
            </div>
            
          </div>
      </form>
  </div>
      </div>
    );
  }
}
export default CreateAccount;
