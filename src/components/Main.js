import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import moment from 'moment';
import DataStats from './DataStats';
import PropTypes from 'prop-types';

class Main extends React.Component {
    constructor(){
        super();
        this.renderFile = this.renderFile.bind(this);
        this.renderContent = this.renderContent.bind(this);
	this.renderShowsTotal = this.renderShowsTotal.bind(this);
	this.renderTable = this.renderTable.bind(this);
	this.dateFormatter = this.dateFormatter.bind(this);
    }
    renderFile(file){
        return (
            <tr key={file.accession}>
                <td>{file['accession']}</td>
                <td>{file['description']}</td>
                <td>{file['size']}</td>
                <td>{file['platform']}</td>
                <td>{file['created']}</td>
            </tr>
        )    
    }
    
    renderContent() {
      var _files = this.props.files;
        console.log(_files);
      if (typeof _files.files !== "undefined") {
        return Object.keys(_files.files).map((file) => {
          return this.renderFile(_files.files[file.file])
        })
      } else {
          return <tr><td></td><td>Loading ...</td></tr>
      }
    }
	
    dateFormatter(cell, row){
    	//console.log( <Timestamp time = '1450663457' format='full' includeDay />);
	return moment(cell).format('lll');
    }
    
    renderTable() {
      var _files = this.props.files;
      //console.log(_files);
      if (typeof _files.files !== "undefined") {
      const options = {
      page: 1,  // which page you want to show as default
      sizePerPageList: [ {
        text: '10', value: 10
      }, {
        text: '20', value: 20
      }, {
        text: 'All', value: _files.files.length
      } ], // you can change the dropdown list for size per page
      sizePerPage: 10,  // which size per page you want to locate as default
      pageStartIndex: 1, // where to start counting the pages
      paginationSize: 3,  // the pagination bar size.
      prePage: 'Prev', // Previous page button text
      nextPage: 'Next', // Next page button text
      firstPage: 'First', // First page button text
      lastPage: 'Last', // Last page button text
      prePageTitle: 'Go to previous', // Previous page button title
      nextPageTitle: 'Go to next', // Next page button title
      firstPageTitle: 'Go to first', // First page button title
      lastPageTitle: 'Go to Last', // Last page button title
      paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
      paginationPosition: 'top'  // default is bottom, top and both is all available
      // hideSizePerPage: true > You can hide the dropdown for sizePerPage
      // alwaysShowAllBtns: true // Always show next and previous button
      // withFirstAndLast: false > Hide the going to First and Last page button
      // hidePageListOnlyOnePage: true > Hide the page list if only one page.
      };
        var files2 = _files.files.map(function(d){return d.file});
        return (
	    <BootstrapTable data={files2} pagination={ true } options={ options } exportCSV>
      		<TableHeaderColumn isKey dataField='accession'>Accession</TableHeaderColumn>
      		<TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
      		<TableHeaderColumn dataField='size'>Size</TableHeaderColumn>
      		<TableHeaderColumn dataField='platform'>Platform</TableHeaderColumn>
      		<TableHeaderColumn dataField='created' dataFormat={this.dateFormatter}>Date Created</TableHeaderColumn>
  	    </BootstrapTable>
        )
      } else {
          return <p>Loading ...</p>
      }
    }
    
    renderShowsTotal(start, to, total) {
    return (
      <p style={ { color: 'blue' } }>
        From { start } to { to }, totals { total }&nbsp;&nbsp;(files)
      </p>
    );
    }

	
    render(){
    let {fqCnt, projCnt, expCnt, sampCnt} = this.props;
    return (
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h1 className="page-header">Overview</h1>
            <div className="row placeholders">
              <div className="col-xs-6 col-sm-3 placeholder">
                <div className="stat fileStat"><span className="counts">{fqCnt}</span></div>
                <h4>Files</h4>
                <span className="text-muted">Raw reads</span>
              </div>
              <div className="col-xs-6 col-sm-3 placeholder">
                <div className="stat projectStat"><span className="counts">{projCnt}</span></div>
                <h4>Projects</h4>
                <span className="text-muted">projects</span>
              </div>
              <div className="col-xs-6 col-sm-3 placeholder">
                <div className="stat assayStat"><span className="counts">{expCnt}</span></div>
                <h4>Assays</h4>
                <span className="text-muted">experiments</span>
              </div>
              <div className="col-xs-6 col-sm-3 placeholder">
                <div className="stat sampleStat"><span className="counts">{sampCnt}</span></div>
                <h4>Samples</h4>
                <span className="text-muted">mice samples</span>
              </div>
            </div>
            <div>
                <DataStats />
            </div>
            <h2 className="sub-header">Files</h2>
            <div>
              { this.renderTable() }
            </div>
          </div>
)
}
}

Main.propTypes = {
    files: PropTypes.object.isRequired,
    fqCnt: PropTypes.number.isRequired,
    projCnt: PropTypes.number.isRequired,
    expCnt: PropTypes.number.isRequired,
    sampCnt: PropTypes.number.isRequired
};

export default Main;
