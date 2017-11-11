import {
  TOGGLE_SIGN_IN
} from '../Actions';

const initialState = {
  showModal:false
}

export default(state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIGN_IN:
    return{
      ...state,
        showModal: !state.showModal
      }
    default:
      return state;
  }
}
