import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Schedule from './Components/Schedule';
class App extends Component {
  
  render() {
    return (
      <div >
        <Navbar/>
        <div className="header">
            <i className="fa fa-arrow-down  circleShadow" aria-hidden="true" id="arrow"></i>
        </div>
        <Services/>
        <Schedule/>

      </div>
    );
  }
}

export default App;
