import React,{Component} from'react';

class JournalTable extends Component {
    render() {
      return (
      <div className="App">
        <h1>Journal Entry</h1>
        <hr/>
        <table className = "table table-stripped">
            <thead bgcolor="#393a3d" style={{ color: "white" }}>
            <tr>
                <td><strong>DATE</strong></td>
                <td><strong>NAME</strong></td>
                <td><strong>Ref</strong></td>
                <td><strong>DEBIT</strong></td>
                <td><strong>CREDIT</strong></td>
                <td><strong>ACTION</strong></td>
            </tr>
            </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    );
    }
  }
  export default JournalTable;
