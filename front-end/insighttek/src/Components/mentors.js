import React from 'react';
import Rodal from 'rodal';

import './Family.css';

// include styles
import 'rodal/lib/rodal.css';

export class Mentors extends React.Component {

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    show() {
        this.setState({ visible: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div>
                <div style={{fontSize: 16}} className="well card-5 col-md-6 col-md-offset-2" onClick={this.show.bind(this)}>
                  <div className="row">
                    <div className="col-md-4"><span className="househead"><i className="fa fa-user" aria-hidden="true"></i> {this.props.mentors.first}</span></div>
                    <div className="col-md-4"><span className="phone"><i className="fa fa-phone" aria-hidden="true"></i> {this.props.mentors.phone}</span></div>
                    <div className="col-md-4"><span className="description"><i className="fa fa-money" aria-hidden="true"></i>{this.props.mentors.description ? "Employed" : "Not Employed"}</span></div>
                  </div>
                </div>
            </div>
        )
    }
}
