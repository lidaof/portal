import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import './dashboard.css';
import App from './App';
//import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopNav from './components/TopNav';
import Left from './components/Left';
import Footer from './components/Footer';
import File from './components/File';
import Assays from './components/Assays';
import NotFound from './components/NotFound';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';


class Root extends React.Component {
    render(){
    return (
        <BrowserRouter>
            <div>
                <TopNav />
                <div className="container-fluid">
                    <div className="row">
                    <Left />
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/assays" component={Assays} />
                        <Route path="/file/:fildId" component={File} />
                        <Route component={NotFound} />
                    </Switch>
                    </div>
                </div>
                <Footer dpVersion="v1" />
            </div>
        </BrowserRouter>
    );
    }
};


export default Root;
