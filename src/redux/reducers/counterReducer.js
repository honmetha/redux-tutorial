import { ADD_COUNTER, SUBTRACT_COUNTER, ADD_NUMBER, MULTIPLY_NUMBER, DIVINE_NUMBER } from '../actions/actions';

const counterReducer = (counter = 0, {type, number}) => {
  switch (type) {
      case ADD_COUNTER:
        return counter +1;
      case SUBTRACT_COUNTER:
        return counter -1;
      case ADD_NUMBER:
        return parseInt( number )+counter;
      case MULTIPLY_NUMBER:
        return parseInt( number )*counter;
      case DIVINE_NUMBER:
        return parseInt( number )/counter;
      default:
        return counter;
  }
}

export default counterReducer;