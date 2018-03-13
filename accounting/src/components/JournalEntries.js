import React,{ Component } from 'react'
import JETable from './JETable' 
import DatePicker from 'react-date-picker'
import { Link } from 'react-router-dom'
import './css/JournalEntries.css'


class JournalEntries extends Component{
    constructor(props){
        super(props);
        this.addRow = this.addRow.bind(this);
        this.removeRow =this.removeRow.bind(this);
        this.state={
            date: new Date(),
            rows:[{"id":1, "accountName":"cash"},{"id":2,"accountName":"Equipment"}]
       };
    }
    render(){
        return(
            <div>
                <h1 className = "journalEntry-h1">Journal Entry</h1>
                <form>
            <table className ="table table-stripped">
            <thead>
                <th>Date</th>
                <th>Account Name</th>
                <th>Reference</th>
                <th>Dr.</th>
                <th>Cr.</th>
            </thead>
                <tbody>
                            <JETable tempAccounts = {this.state.rows} calendar = {<DatePicker
                                                onChange={this.onDateChange.bind(this)}
                                                value={this.state.date}/>} />
                      
                </tbody>
            </table>
            <div id="btn-add">
            <button type ="button" class ="btn-success" onClick= {this.addRow} >Add New Account</button>
            </div>
        </form>
                                
                                    <div className="journalEntry-description">
                    <h2>Description</h2>
                    <textarea></textarea>
                </div>
                <div className="journalEntry-buttons">
                    <button className="btn-danger">Cancel</button>
                    <button className="btn-success">Submit</button>
                </div>

            </div>
        );
    }
    //Add and remove rows
    addRow(){

        var nextState = this.state;
        nextState.rows.push([{"id":1,"name":"chase"}]);
        this.setState(nextState);
    }

    removeRow(e, id){
    /* console.log(id);
    this.setState({rows: this.state.rows.filter(function(rows){
            return rows !== e.currentTarget.value;
        })});
        var preState = this.state;
        var array = this.state.rows;
        var index = e.target.id;
        alert(index);
        array.slice(index,1);
        preState.rows = array;
        this.setState(preState);*/
    }
    //calendar functions
    onDateChange(date){
        this.setState({ date });
    }
    handleChange(e){
        const date = e.target.value;
        console.log(date);
        this.props.onDateChange(date);
    }
}
export default JournalEntries