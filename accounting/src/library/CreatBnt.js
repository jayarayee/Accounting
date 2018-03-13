import React from 'react';
import './library.css'


export const CreatBnt = (props) =>{
    return(
        <div className="col-8">
            <a className="btn btn-success btn3d" id="btn"  href="/create"><span className="glyphicon glyphicon-pencil"></span><strong> Create Accounts</strong></a>
        </div>
    );
}