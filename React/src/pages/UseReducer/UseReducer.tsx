import React, {createContext, useReducer } from 'react'
import { reducer } from './reducer';
import Increment from './Increment';
import Decrement from './Decrement';


export const CounterContext = createContext<React.Dispatch<{type:string , payload:number}>|undefined>(undefined)

const UseReducer = () => {
  const initialState= {counter:0} ; 
  const [counter , dispatch] = useReducer(reducer , initialState) ; 
  return (
    <CounterContext.Provider value={dispatch}>
      <span>Count:{counter.counter}</span>
     <Increment></Increment>
     <Decrement></Decrement>
     
    </CounterContext.Provider>
  )
}

export default UseReducer
