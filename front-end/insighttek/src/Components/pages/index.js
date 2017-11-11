import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../../App.css';
import Navbar from '../Navbar';
import Services from '../Services';
import Schedule from '../Schedule';
import PageShell from '../PageShell'
import {withRouter} from "react-router-dom";
class index extends Component {

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
export default withRouter(index)
