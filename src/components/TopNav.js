import React from 'react';
import { Button } from 'react-bootstrap';


const TopNav = (props) => {
    return (

      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">TaRGET Data Portal</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="/matrix">Matrix</a></li>
                <li><a href="/methods">Methods</a></li>
                <li><a href="/policies">Policies</a></li>
                <li><a href="/help">Help</a></li>
            </ul>
            <form className="navbar-form navbar-right">
              <input type="text" className="form-control" placeholder="Search..." />
            </form>
          </div>
        </div>
      </nav>
    );
    
}


export default TopNav;


