import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCount } from '../redux/actions'

const SetCounter = () => {
  // This is the state from the store
  const storeCounter = useSelector(state => state.count)
  // And this value will be showed in the counter below
  const [counterValue, setCounterValue] = useState(storeCounter)
  const dispatch = useDispatch()

  // Every time the store counter changes we update the value of the counter to match it
  useEffect(() => {
    setCounterValue(storeCounter)
  }, [storeCounter])

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          dispatch(setCount(counterValue))
        }}
      >
        <label htmlFor="set-to">Set count</label>
        <input
          id="set-to"
          type="number"
          value={counterValue}
          onChange={event => setCounterValue(event.target.value)}
        />
        <input type="submit" />
      </form>
    </section>
  )
}

export default SetCounter