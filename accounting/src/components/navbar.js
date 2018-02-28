import React from 'react';
import {Link} from 'react-router-dom'
import './css/NavBar.css'

export const Header = (props) =>{
    return(
        <nav className="navbar navbar-expand navbar-primary ">
          <a className="navbar-brand" href="/home"><strong>Anywhere <br></br>Accounting</strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/home">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link"href="/chart_accounts">Charts of Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/accounts">Accounts</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/logs">Logs</a>
          </li>

          </ul>
          
        </div>
        <div class="pull-right">
        <ul class="nav pull-right">
            <li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Welcome, Jay</a>
              <ul class="dropdown-menu">
                <li><a href="/user/preferences"><i class="icon-cog"></i> Preferences</a></li>
                <li><a href="/help/support"><i class="icon-envelope"></i> Contact Support</a></li>
                <li class="divider"></li>
                <li><a href="/auth/logout"><i class="icon-off"></i> Logout</a></li>
              </ul>
            </li>
        </ul>
      </div>
      </nav>
      
    );
};