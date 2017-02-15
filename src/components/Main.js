import React from 'react';

class Main extends React.Component {
    constructor(){
        super();
        this.renderFile = this.renderFile.bind(this);
    }
    renderFile(file){
        return (
            <tr>
                <td>{file['accession']}</td>
                <td>{file['accession']}</td>
                <td>{file['accession']}</td>
                <td>{file['accession']}</td>
                <td>{file['accession']}</td>
            </tr>
        )    
    }
    render(){
        if(this.props.files.length ===0) { return null; }
        const files = this.props.files;
        console.log(files);
    return (
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
            <h1 className="page-header">Overview</h1>
            <div className="row placeholders">
              <div className="col-xs-6 col-sm-3 placeholder">
                <div className="stat fileStat"><span className="counts">12,300</span></div>
                <h4>Files</h4>
                <span className="text-muted">Raw reads</span>
              </div>
              <div className="col-xs-6 col-sm-3 placeholder">
                <div className="stat projectStat"><span className="counts">18</span></div>
                <h4>Projects</h4>
                <span className="text-muted">projects</span>
              </div>
              <div className="col-xs-6 col-sm-3 placeholder">
                <div className="stat assayStat"><span className="counts">56</span></div>
                <h4>Assays</h4>
                <span className="text-muted">experiments</span>
              </div>
              <div className="col-xs-6 col-sm-3 placeholder">
                <div className="stat sampleStat"><span className="counts">268</span></div>
                <h4>Samples</h4>
                <span className="text-muted">mice samples</span>
              </div>
            </div>
            <h2 className="sub-header">Files</h2>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        files.length > 0 &&
                        files['files'].map(this.renderFile)
                    } 
                </tbody>
              </table>
            </div>
          </div>
)
}
}

export default Main;
