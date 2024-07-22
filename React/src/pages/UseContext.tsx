import React, { createContext, useState} from 'react'
import RedButton from '../conponents/RedButton';

interface IData {
    data:number ; 
    setData:React.Dispatch<React.SetStateAction<number>>
  }

export const DataContext = createContext<IData>({data:0 , setData:()=>0})
const UseContext = () => {
    const [data , setData] = useState<number>(0) ; 
  return (
    <DataContext.Provider value={{data,setData}}>
    <div>
      <p>Data:{data}</p>
    </div>
    <div>
      <RedButton></RedButton>
    </div>
  </DataContext.Provider>
  )
}

export default UseContext ; 
