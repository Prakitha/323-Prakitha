import { useState } from "react";
import store from "../store/Mystore";
const ReduxDemo = () => {
    var storeData = store.getState();
    console.log(" Initail data in the store ")
    console.log(storeData);

    const addOnePlayers = () => {
        console.log("Dispatch Add_one action")
        store.dispatch({ type: "ADD_ONE" });
        console.log("Latest store data is :")
        console.log(store.getState());
    }
    const addTwoPlayers = () => {
        console.log("Dispatch ADD_TWO action");
        store.dispatch({ type: "ADD_TWO" });
        console.log("Latest store data is :");
        console.log(store.getState());
    }
    const removePlayer = () => {
        console.log("Dispatch Rem action")
        store.dispatch({ type: "REMOVE_PLAYER", playerName: localState.playerToRemove });
        console.log("latest store data is :");
        console.log(store.getState());
    }
const removeByAge=()=>{

    console.log("Remove player with age")
    store.dispatch({type:"REMOVE_PLAYER_BY_AGE",playerAge:localState1.ageToRemove})
    console.log("latest store data is :");
        console.log(store.getState());
}


    const [localState, setLocalState] = useState({ playerToRemove: "" });
    const handleChange = (e) => {
        e.preventDefault();
        setLocalState({ ...localState, playerToRemove: e.target.value })

    }
    const [localState1, setLocalState1] = useState({ ageToRemove: "" });

    const handleChange1 = (e) => {
        e.preventDefault();
        setLocalState1({ ...localState, ageToRemove: e.target.value })

    }
   

    return (

        <div>Redux Demo

            Initial data from the store is:
            <ul>
                {store.getState().map(
                    (item, key) => <li key={key}> {item.name}  {item.age} {item.awards.join(",")} </li>
                )
                }
            </ul>
            <button onClick={addOnePlayers}>Add one player</button><br />
            <button onClick={addTwoPlayers}>Add two player</button><br />
            Enter Player Name : <input type="text" name="name" value={localState.playerToRemove} onChange={handleChange} /><br />
            <button onClick={removePlayer}>Remove Player</button><br/>
            Enter Player Age : <input type="text" age="age" value={localState1.ageToRemove} onChange={handleChange1} /><br />
         
           <button onClick={removeByAge}>Remove Player by age</button>

        </div>
        

        
    )
}

export default ReduxDemo;