import { connect } from 'react-redux';
import {toggleSignInModal} from '../Actions';
import Navbar from './Navbar';

export default connect(
  (state)=> {
    return({
      isShowingModal: state.showModal,
    })
  },
  (dispatch) => ({
      onClick: event => console.log("hey")
    })
)(Navbar)
