import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Schedule from './Components/Schedule';
import PageShell from './Components/PageShell'
import Login from './Components/pages/Login';
import index from './Components/pages/index';
import main from './Components/pages/profile';
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App container-fluid">
        <Route path="/signin" exact component={PageShell(Login)}></Route>
        <Route path="/" exact component={PageShell(index)}></Route>
          <Route path="/main" exact component={PageShell(main)}></Route>
      </div>
    );
  }
}

export default App;
