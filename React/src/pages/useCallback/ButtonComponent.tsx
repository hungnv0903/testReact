import React, { memo } from 'react'

interface IProps {
    onIncrement:(value:number)=>void ; 
}

const ButtonComponent = ({onIncrement}:IProps) => {
    console.log("Button") ; 
  return (
    <div>
       <button onClick={()=>onIncrement(1)}>Increment</button>
    </div>
  )
}

export default memo(ButtonComponent) ; 
