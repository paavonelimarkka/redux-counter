import React from 'react'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from 'react-redux'
import { incrementCount, decrementCount, setCount } from '../redux/actions'

import SetCounter from './SetCounter'

const Counter = () => {
  // The count will no match the stores state
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  // This is just to make the action dispatch calls slightly prettier
  // These could actually be placed in a custom hook
  const actions = bindActionCreators({ incrementCount, decrementCount, setCount }, dispatch)

  return (
    <main>
      <h1>Days since last kalia</h1>
      <p>{count}</p>
      <section>
        <button onClick={() => actions.incrementCount()}>Increment</button>
        <button onClick={() => actions.decrementCount()}>Decrement</button>
        <button onClick={() => actions.setCount(0)}>Reset</button>
      </section>
      <SetCounter />
    </main>
  )
}

export default Counter