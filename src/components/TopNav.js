import React from 'react';
import { Button } from 'react-bootstrap';


const TopNav = (props) => {

        //return (
        //    <header className="top">
        //        <h1>
        //        TaRGET Data Portal
        //        </h1>
        //        <h3 className="dpVersion"><span>{props.dpVersion}</span></h3>
        //    </header>
       // )
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
            <a className="navbar-brand" href="#">TaRGET Data Portal</a>
            <span className="dpVersion">{props.dpVersion}</span>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Matrix</a></li>
              <li><a href="#">Methods</a></li>
              <li><a href="#">Policies</a></li>
              <li><a href="#">Help</a></li>
            </ul>
            <form className="navbar-form navbar-right">
              <input type="text" className="form-control" placeholder="Search..." />
            </form>
          </div>
        </div>
      </nav>
    );
    
}

TopNav.propTypes = {
    dpVersion: React.PropTypes.string.isRequired
}

export default TopNav;


