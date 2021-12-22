// Importing action types to be referred
import { DECREMENT, INCREMENT, SET } from "./actions"

// Make an initial state
const initialState = { count: 0 }

// Reducer always takes two arguments, state and an action
// It returns a state. Either a new state or the previous state 
// We could have these as separate reducers and combine them all to form the reducer
const reducer = (state = initialState, action) => {

  if (action.type === INCREMENT) {
    return { count: state.count + 1 }
  }

  if (action.type === DECREMENT) {
    return { count: state.count - 1 }
  }

  if (action.type === SET) {
    return { count: parseInt(action.payload, 10) }
  }

  else {
    return state
  }

}

export { initialState, reducer }