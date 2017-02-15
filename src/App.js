import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import './dashboard.css';
import TopNav from './components/TopNav';
import Left from './components/Left';
import Main from './components/Main';
//import Client from './components/Client';
import Client from './components/Axios';
//import {fetchData} from './components/actions';

class App extends Component {
  constructor(){
    super();
    this.getFiles = this.getFiles.bind(this);
    this.state = {
      assays: [],
        files:{}
    };
  }
  
    componentWillMount(){
        this.getFiles();
    }
    
    getFiles(){
        Client.search('files',null)
            .then(res => this.setState({ files: res.data }))
            .catch(err => console.log(err));
    }
  
//  listAssay() {
//    fetchData('http://target.wustl.edu:8006/api/assays');
//  }
    

  render() {
    return (
      <div>
            <TopNav dpVersion="v1" />
            <div className="container-fluid">
                <div className="row">
                    <Left />
                    <Main files={this.state.files} />
                </div>
            </div>
      </div>
    );
  }
}

export default App;

