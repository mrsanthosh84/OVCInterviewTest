import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import UserPost from './components/UserPost';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div class="container">
        <header>
          <h1>
              OVC-Interview-Test
          </h1>
        </header>
        <br />
        <Router>
          <div className="col-md-6">
            <Switch>
              <Route path="/" exact component={Table} />
              <Route path="/user-post" exact component={UserPost} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
