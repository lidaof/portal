import React from 'react'

const Left = (props) => {
    return (
          <div className="col-sm-3 col-md-2 sidebar">
            <ul className="nav nav-sidebar">
              <li className="active"><a href="#">Overview <span className="sr-only">(current)</span></a></li>
              <li><a href="#">Labs</a></li>
              <li><a href="#">Libraries</a></li>
            </ul>
            <ul className="nav nav-sidebar">
              <li><a href>Assays</a></li>
              <li><a href>Bio Projects</a></li>
              <li><a href>Experiment</a></li>
            </ul>
            <ul className="nav nav-sidebar">
              <li><a href>BioSamples</a></li>
              <li><a href>Diets</a></li>
              <li><a href>Litters</a></li>
              <li><a href>Mice</a></li>
              <li><a href>Reagents</a></li>
              <li><a href>Treatments</a></li>
            </ul>
          </div>
)
}


export default Left;
