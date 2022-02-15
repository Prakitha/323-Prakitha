const ReducerConceptDemo = () => {

    var counter = 0;
    const increment = (cnt = 0) => {
        counter = cnt + 1;
        return counter;
    }
    let val1 = increment();
    console.log(val1);

    val1 = increment(10);
    console.log(val1);

    val1 = increment();
    console.log(val1);
    var nameOfRiver = "Yamuna";
    console.log(nameOfRiver);
    const changeToUpperCase = (nRvr = "") => {
        nameOfRiver = nameOfRiver.toUpperCase();
        return nameOfRiver;
    }
    changeToUpperCase(nameOfRiver);
    console.log(nameOfRiver);

    var someStr = "AaAa";
    const changeToUpperCase2 = (nRvr = "") => {
        someStr = someStr.toUpperCase();
        return nRvr;
    }
    var nameOfRiver2 = "Ganga"
    console.log("100" + nameOfRiver);
    changeToUpperCase2(nameOfRiver2);
    console.log("100" + nameOfRiver2)

    //
    var citiesArr1 = ["hyderabad", "Chennai", "Bnaglore"];
    const addNewCity = (cArray = []) => {
        return cArray.push("Shimla");
    }
    console.log(citiesArr1);
    addNewCity(citiesArr1);
    console.log(citiesArr1);
////
const addNewCity2=(cArray=[])=>{
    let [...newArr]=citiesArr1;
    newArr.push("Delhi");
    return newArr;
}

var player={
    name:"Praki",
    age:20
};
const addTwenty=(plyr={})=>{
    plyr.age=plyr.age+12;
    return plyr;
}
console.log(player.name+" "+player.age);
addTwenty(player);
console.log(player.name +" "+player.age);
//
const addTwenty2=(plyr={})=>{
    let localPlyr={...plyr,age:plyr.age+20};
    return localPlyr;
}

    return (
        <div>Reducer starter Demo</div>
    )
}
export default ReducerConceptDemo