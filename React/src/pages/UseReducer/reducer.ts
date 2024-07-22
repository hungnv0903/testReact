interface ActionProps {
    type:string ; 
    payload:number ; 
}

interface State {
    counter:number
}


export const reducer = (state:State , action:ActionProps)=>{
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state, counter:state.counter + action.payload
            }
            break;
        case "DECREMENT":
            return {
                ...state,counter:state.counter-action.payload
            }
            break;
    
        default:
            return state ; 
    }
}