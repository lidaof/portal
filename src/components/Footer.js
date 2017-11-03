import React from 'react'

const Footer = (props) => {
    return (
	<div className="container-fluid">
        <hr />
        <footer>
            <div className="row">
                <div className="col-lg-12 footer">
        <p>    Wang Lab @ WashU -- 
             Version: <span className="dpVersion">{props.dpVersion}</span>
	</p>
	 </div>
            </div>
        </footer>

    </div>
)
}

Footer.propTypes = {
    dpVersion: React.PropTypes.string.isRequired
}

export default Footer;
