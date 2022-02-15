import store from "../Store/Mystore"
var initialPlayers = [
    { name: "player0", age: 35, awards: ["AAAAA", "asas"] },
    { name: "player1", age: 30, awards: ["asasa", "asas"] },
    { name: "player2", age: 39, awards: ["troubleshooter", "kingfisher"] },
];


const PlayerReducerUsingImmutableJS = (state = initialPlayers, action) => {
    switch (action.type) {

        case "ADD_ONE":
           return Immutable.List(state).push({name: "player10", age: 39, awards: ["troubleshooter","active"]})

        case "ADD_TWO":
            let [...newState2] = state;
            newState2.push({ name: "player3", age: 30, awards: ["padm1"] });
            newState2.push({ name: "player4", age: 40, awards: ["padm2"] });
            return newState2;
        case "REMOVE_NAME":
            let [...newState4] = state;
            if (newState4.name === "player3") {
                newState4.pop();
                return newState4
            } break;

        case "REMOVE_PLAYER":
            let pName = action.playerName;
            let [...newState3] = state;
            newState3 = newState3.filter(item => item.name !== pName)
            return newState3
        case "REMOVE_PLAYER_BY_AGE":
            let pAge = action.playerAge;
            let [...newState5] = state;
            newState5 = newState5.filter(item => item.age != pAge)
            return newState5

    
                default:
            return state;
    };

}

export default PlayerReducerUsingImmutableJS;


