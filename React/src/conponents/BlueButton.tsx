import React, { useContext } from 'react'
import { DataContext } from '../pages/UseContext';

const BlueButton = () => {
    const {data , setData} = useContext(DataContext) ; 
  return (
    <div>
      <button onClick={()=>setData((prev)=>prev-1)}>Blue</button>
      <span>Blue Data: {data}</span>
    </div>
  )
}

export default BlueButton
