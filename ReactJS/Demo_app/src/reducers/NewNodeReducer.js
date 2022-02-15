const NewNodeReducer=(state=[], action)=>{
    switch (action.type){
        case "NODE_APP_RECIEVED":
            let [...newState]=state;
            newState=action.json;
            return newState;
            default:
                return state;
    }
}
export default NewNodeReducer