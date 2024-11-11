const initialState=0;

const modifyValue=(state=initialState,action)=>{
    switch(action.type){
        case "incrementSaga":
            return state+action.payload
        case "decrementSaga":
            return state-action.payload
        default:
            return state
    }
}

export default modifyValue;