import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import asyncComponent from './asyncComponent';

const AsyncApp = asyncComponent(() => import(/* webpackChunkName: "app" */'./App'));
const AsyncAbout = asyncComponent(() => import(/* webpackChunkName: "about" */'./About'));

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={AsyncApp} />
          <Route path="/about" component={AsyncAbout} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
