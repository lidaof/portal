import React, { Component } from 'react';
//import logo from './logo.svg';
import Main from './components/Main';
//import Client from './components/Client';
import Client from './components/Axios';
//import {fetchData} from './components/actions';

class App extends Component {
  constructor(){
    super();
    this.state = {
        files:{},
        fqCnt : 0,
        projCnt : 2,
        expCnt : 6,
        sampCnt : 10

    };
  }
  
    componentDidMount(){
        Client.search('files/all',null)
            .then(res => {
                this.setState({ files: res.data });
                this.setState({fqCnt:res.data.files.length});
                //let tmps = {}, tmpc = {};
                //for (var i=0; i < res.data.files.length; i++){
                //    let sam = res.data.files[i].sample.tissue, ass = res.data.files[i].assay.technique;
                //    tmps[sam] = 1 + ( tmps[sam] || 0);
                //    tmpc[ass] = 1 + ( tmpc[ass] || 0);
                //}
                //console.log(tmpc);
                //this.setState({expCnt:tmpc, sampCnt:tmps});

            })
        //.then(
                //if (this.state.files){
                    //fill the count number, and fill the data for plotting
                //}
        //)
            .catch(err => console.log(err));
    }

  render() {
    return (
        <Main 
            files={this.state.files}
            fqCnt={this.state.fqCnt}
            projCnt={this.state.projCnt}
            expCnt={this.state.expCnt}
            sampCnt={this.state.sampCnt}
        />
    );
  }
}

export default App;

