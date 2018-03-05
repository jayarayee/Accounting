import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SingleAccount extends Component {
  
  render() {
    const {single} = this.props
    return (
      <tr>
        <td>{single.accountCode}</td>
        <td>{single.accountName}</td>
        <td>{single.normalSide}</td>
        <td>
        {single.accountStatus ===true &&(
          <p>Active</p>
        )}
        {single.accountStatus ===false &&(
          <p>Inactive</p>
        )}
        </td>
        <td>{single.initialBalance}</td>
        <td>
          <div className="btn-group">
            <button className="btn btn-success" Link to="/edit" >Edit</button>
            <button className="btn btn-danger" Link to="/edit" >Disable</button>
          </div>
        </td>
      </tr>
    );
  }
}
export default SingleAccount;
