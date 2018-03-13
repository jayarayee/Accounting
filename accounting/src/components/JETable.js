import React from 'react'
import DatePicker from 'react-date-picker'



const JETable = (props) =>{
    return(     
                    props.tempAccounts.map(tempAccount =>(
                        <tr>
                            <td>{props.calendar}</td>
                            <td>{tempAccount.accountName}</td>
                            <td>A101</td>
                            <td><input id ="input1"type="number" step='0.01' defaultValue="0.00" min ="0"/>
                                <span className="btn-add">+</span>    
                                   
                            </td>
                            <td><input id ="input1"type="number" step='0.01' defaultValue="0.00" min ="0"/>
                                <span className="btn-add">+</span>    
                            </td>
                            <td className="btn-remove">X</td>
                        </tr>
                        
                    ))
    );
};
export default JETable