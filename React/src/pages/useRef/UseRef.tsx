import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const [count , setCount] = useState<number>(60) ;
    const prevCount = useRef(count) ; 
    const hRef = useRef(null) ; 
    useEffect(()=>{
        prevCount.current = count ; 
    },[count])
    console.log(count , prevCount.current) ;
    const refCount = useRef(0) ; 
    const handelStart = ()=>{
        refCount.current = setInterval(()=>{
            setCount(prev=>prev-1) ; 
        },1000)
    } 
    const handleStop = ()=>{
        clearInterval(refCount.current)
    }

    useEffect(()=>{
        console.log(hRef.current)
    })
  return (
    <div>
      <h3 ref={hRef}>UseRef</h3>
      <span>{count}</span>
      <button onClick={handelStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default UseRef
