import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import ProjectNew from "./projects/ProjectNew";
import ProjectView from "./projects/ProjectView";

import * as actions from '../actions';

import '../style/App.css';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }

  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <Header />
            <ProjectNew />
            <Route path="/" exact component={Landing} />
            <Route path="/projects" exact component={Dashboard} />
            <Route path="projects/:projectID" exact component={ProjectView} />
          </BrowserRouter>
        </div>
    );
  }
}

export default connect(null, actions)(App);
