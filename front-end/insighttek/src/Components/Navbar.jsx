import React from 'react';
import SignInModal from './SignInModal';
const Navbar = ({isShowingModal,onClick}) => {
  return(
  <div>
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Navbar</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <ul className="secondList">
          <li >
            <div className="v-link" onClick={onClick}> Sign In</div>
          </li>
          <li >
            <a className="v-link" href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)
}
export default Navbar;
