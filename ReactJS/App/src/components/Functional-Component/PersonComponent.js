import { useState } from "react";

const PersonComp = (props) => {
    const [score, setScore] = useState(5);
    //const iniFav=
const [fav,setFav]=useState(["katli","motichoor","chips","pavbhaji"])

const ChangeFav=()=>{
    fav[0]="jalebi";
    let newFav=[...fav]
    setFav(newFav);
}
    return (
        <div style={{ border: "5px  solid blue" }}>Hello {props.name} and my score is {score} <br />
            <button onClick={() => setScore(score + 1)}>Click to see the score</button><br />
            Favfood:1.{fav[0]},2.{fav[1]},3.{fav[2]},4.{fav[3]}<br/>
            <button onClick={ChangeFav}>Click</button>

            </div>
            
    );
}
export default PersonComp
