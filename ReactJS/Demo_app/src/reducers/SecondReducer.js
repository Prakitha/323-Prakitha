import intialPlayers from '../data/data';
import Immutable from 'immutable';
const SecondReducer=(state=intialPlayers,action)=>{
    console.log(state);
    console.log(action);
    switch(action.type){

case "REMOVE_PLAYER_AGE_MORE_THAN_70":
    console.log("Inside REMOVE_PLAYER_AGE_MORE_THAN_70 ")
return Immutable.List(state).filter(item => item.age <= 70);

        
default:
    return state;
};

}
    

export default SecondReducer