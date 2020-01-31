import { SUBTRACT_COUNTER } from "../../../../react-redux-Counter/src/redux/actions/actions";

export const ADD_COUNTER = "ADD_COUNTER";
export const SUBSTRACT_COUNTER = "SUBSTRACT_COUNTER";
export const TOGGLE_VISIBLE = "TOGGLE_VISIBLE";
export const ADD_NUMBER = "ADD_NUMBER";
export const MULTIPLY_NUMBER = "MULTIPLY_NUMBER";
export const DIVINE_NUMBER = "DIVINE_NUMBER"


export function addCounter() {
  return {
    type: ADD_COUNTER
  };
}

export function subtractCounter() {
  return {
    type: SUBTRACT_COUNTER
  };
}

export function toggleVisible() {
  return {
    type: TOGGLE_VISIBLE
  };
}

export function addNumberToCounter(number) {
  return {
    type: ADD_NUMBER,
    number: number
  };
}

export function multiplyNumber(number) {
  return {
    type: MULTIPLY_NUMBER,
    number: number
  }
}

export function divineNumber(number) {
  return {
    type: DIVINE_NUMBER,
    number: number
  }
}