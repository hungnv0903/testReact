import React, { useCallback, useMemo, useState } from 'react'
import FormComponent from './FormComponent';

const UseMemo = () => {
    const [data , setData] = useState<number>(0) ; 

    const fibonaci = (n:number):number=>{
        if(n<2){
            return n ; 
        }
        return fibonaci(n-1)+fibonaci(n-2) ; 
    }

    console.time("fibonaci")
    const result = useMemo(()=>{
      return fibonaci(40) ; 
    },[])
    console.timeEnd('fibonaci') ; 

    const handleSubmit = useCallback(()=>{
        console.log("useCallback")
    },[])

    const [total] = useState<number>(0)

  return (
    <div>
      <span>UseMemo:{data}</span><br />
      <span>Result: {result}</span><br />
      <button onClick={()=>setData(data+1)}>Icrease</button>
      <FormComponent onSubmitForm={handleSubmit} total={total}></FormComponent>
    </div>
  )
}

export default UseMemo
