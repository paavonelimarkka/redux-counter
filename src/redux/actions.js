// Action types
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const SET = "RESET"

// Action creators. These are just functions which return actions
// These will be dispatched to the reducer from the components

const incrementCount = () => {
  return ({ type: INCREMENT })
}

const decrementCount = () => {
  return ({ type: DECREMENT })
}

const setCount = (value) => {
  return ({ type: SET, payload: value })
}

export {
  INCREMENT,
  DECREMENT,
  SET,
  incrementCount,
  decrementCount,
  setCount
}