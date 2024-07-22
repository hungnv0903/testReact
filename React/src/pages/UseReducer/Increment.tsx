import React, { useContext } from 'react'
import { incrementAction } from './action'
import { CounterContext } from './UseReducer'

const Increment = () => {
    const dispatch = useContext(CounterContext) ; 
  return (
    <div>
       <button onClick={()=>(dispatch && dispatch(incrementAction()))}>Increment</button>
    </div>
  )
}

export default Increment
