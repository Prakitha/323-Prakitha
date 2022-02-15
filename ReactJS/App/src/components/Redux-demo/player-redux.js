const ReducerPlayer = () => {
    var player = {
        name: "Praki",
        age: 20,
        awards: ["gold", "silver", "copper"]
    }
    console.log(player.name + " " + player.age + " "+player.awards[1]);

    const addAge= (plyr = {}) => {
        let newPlayer={...plyr}
        newPlayer.age = newPlayer.age + 6;
        return newPlayer;
    }
    console.log("before applyinmg the producer")
   for(var i in player){
    console.log(player[i])
}
    player=addAge(player);
console.log("after applying the reducer")
    for(var i in player){
        console.log(player[i])
    }
    console.log("Name " + player.name + " Age " + player.age + " Awards "+player.awards[0]);

//// player array assessment 2
var playerArr1 = ["prakitha", "samrudh", "Manoritha"];

const addPlayer=(pArray=[])=>{
    let [...newArr]=pArray;
    newArr.push("Mahesh");
    return newArr;
}
console.log(playerArr1)
addPlayer(playerArr1);
console.log(playerArr1)
/// class assessemnt 3
var initialPlayers=[
    {name: "Praki", age: 20,awards: ["gold", "silver", "copper"]},
{name: "Samrudh", age: 15,awards: [ "silver", "copper"]}
]
const AddPlay=(initialPlayers=[{}])=>{
    let [...newArr2]=initialPlayers;
    newArr2.push({name:"sam",age:40,awards:["America","India"]})
    return newArr2;
}
console.log("before:");
console.log(initialPlayers);
initialPlayers=AddPlay(initialPlayers);
console.log("After:")
console.log(initialPlayers);



//// class assessment 4


var initialPlayer=[
    {name: "Praki",add:"add-one", age: 20,awards: ["gold", "silver", "copper"]},
{name: "Samrudh",add:"add-two", age: 15,awards: [ "silver", "copper"]}
]
const AddPlay1=(initialPlayer=[{}])=>{
    let [...newArr3]=initialPlayer;
    newArr3.push({name:"sam",add:"add-one",age:40,awards:["America","India"]})
    return newArr3;
}
console.log("before:");
console.log(initialPlayer);
initialPlayer=AddPlay1(initialPlayer);
console.log("After:")
console.log(initialPlayer)

}
export default ReducerPlayer;