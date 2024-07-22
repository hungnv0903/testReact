import React, {useCallback, useState } from 'react'
import ButtonComponent from './ButtonComponent';

const UseCallBack = () => {
    const [data , setData] = useState<number>(0) ; 
    
    const handleIcrement = useCallback((value:number)=>{
      console.log("IncrementHandle")
      setData((prev)=>prev+value) ; 
    },[]) ; 

  return (
    <div>
      <span>UseCallback : {data}</span>
      <ButtonComponent onIncrement={handleIcrement}></ButtonComponent>
    </div>
  )
}

export default UseCallBack
