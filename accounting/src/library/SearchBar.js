import React from 'react';
import './search.css'

export const Search = (props) =>{
    return(
        <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <form action="" class="search-form">
                    <div class="form-group has-feedback">
                        <label for="search" class="sr-only">Search Accounts</label>
                        <input type="text" class="form-control" name="search" id="search" placeholder="search"/>
                          <span class="glyphicon glyphicon-search form-control-feedback"></span>
                    </div>
                </form>
            </div>
            <div class="pull-right">
                <a className="btn btn-success" id="btn" align="right" href="/create" style={{ color: "white" }}>Create</a>
            </div>
        </div>
    </div>
    
    );
};

