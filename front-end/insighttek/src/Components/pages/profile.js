import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {ModalExample} from '../ModalExample';
import {Mentors} from '../mentors';

import './profile.css';

class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentors: []
    }
  }
  componentDidMount() {
    fetch('https://mywebsite.com/endpoint/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({"type": "school", "field": ""})
    })
  }
  render() {
    const mentors = this.state.mentors.map(mentor=> {
      return <Mentors mentor={mentor}/>
    })
    return (
      <div>
        <div style={{
          fontSize: 20,
          marginBottom: 50
        }} className="welcome card-3 text-center well col-md-6 col-md-offset-2">
          Welcome
        </div>

        {mentors}
      </div>
    )
  }
}

export default withRouter(profile);
