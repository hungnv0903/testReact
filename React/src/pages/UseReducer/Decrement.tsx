import React, { useContext } from 'react'
import { decrementAction } from './action'
import { CounterContext } from './UseReducer'

const Decrement = () => {
    const dispatch = useContext(CounterContext) ; 
  return (
    <div>
       <button onClick={()=>(dispatch && dispatch(decrementAction()))}>Decrement</button>
    </div>
  )
}

export default Decrement
