import React, { Component } from "react";
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

class App extends Component {
  state = { displayBio: false };

  render() {
    return <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" render={() =>{ return (<div>home</div>)} } />
      <Route path="/page1" render={() => { return (<div>page1</div>)}}/>
      <Route path="/page2" render={() =>{ return (<div>page2</div>)}}/>
    </Switch>
  </Router>;
  }
}

export default App;
