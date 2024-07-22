import { Fragment } from 'react/jsx-runtime'
import './App.css'
import UseReducer from './pages/UseReducer/UseReducer'
import UseContext from './pages/UseContext'
import UseCallBack from './pages/useCallback/UseCallBack'
import UseMemo from './pages/useMemo/UseMemo'
import UseRef from './pages/useRef/UseRef'



function App() {
 
  return (
   <Fragment>
    <UseContext></UseContext>
    <hr />    
    <UseReducer></UseReducer>
    <hr />
    <UseCallBack></UseCallBack>
    <hr />
    <UseMemo></UseMemo>
    <hr />
    <UseRef></UseRef>
   </Fragment>
  )
}

export default App
