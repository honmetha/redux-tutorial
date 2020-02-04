import { TOGGLE_VISIBLE } from '../actions/actions';

function visibleReducer(visible = true, action) {
  switch (action.type) {
    case TOGGLE_VISIBLE:
      return !visible;
    default:
      return visible;
  }
}

export default visibleReducer;