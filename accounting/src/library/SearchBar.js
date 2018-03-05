import React from 'react';

export const Search = (props) =>{
    return(
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4">
                <form action="" classNAme="search-form">
                    <div className="form-group has-feedback">
                        <label for="search" className="sr-only">Search Accounts</label>
                        <input type="text" className="form-control" name="search" id="search" placeholder="search"/>
                          <span className="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                </form>
            </div>
            <div className="float-right">
                <a className="btn btn-success" id="btn" align="right" href="/create" style={{ color: "white" }}>Add</a>
            </div>
        </div>
    </div>
    
    );
};

