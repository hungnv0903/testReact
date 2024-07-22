import React, { useContext } from 'react'
import BlueButton from './BlueButton';
import { DataContext } from '../pages/UseContext';

const RedButton = () => {
    const {data , setData} = useContext(DataContext) ; 
  return (
    <div style={{border:"1px soild black"}}>
      <button onClick={()=>setData((prev)=>prev+1)}>Red</button>
      <span>Red Data{data}</span>
      <div>
        <BlueButton></BlueButton>
      </div>
    </div>
  )
}

export default RedButton
