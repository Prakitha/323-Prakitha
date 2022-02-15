/*import { useState,useRef } from "react";
import Player from "./Player";
const ScoresBoard=()=>{
   // ref1 = React.createRef();
    //ref2 = React.createRef();
    const ref1 = React.createRef();
    const ref2 = React.createRef();
    const ref3 = React.createRef();
    changeScore = () => {
        ref1.current.f1();
        ref2.current.f1();

        var score1 =ref1.current.state.score;
        var score2 =ref2.current.state.score;
        if (score1 > 60) {
            ref3.current.setState({ message: "winner is Prakitha" })
        } else if (score2 > 60) {
            ref3.current.setState({ message: "winner is Samrudh" })
        };
var lastScore1=ref1.current.state.lastScore;
var lastScore2=ref2.current.state.lastScore;


    }
    return(
    <div style={{ border: "5px  solid blue" }}>
         <Player name="Prakitha" ref={this.ref1} score={0} />
                <PLayer name="Samrudh" ref={this.ref2} score={0} />
        <br />
    <button onClick={changeScore}>Click to see the score</button><br />
    
    

    </div>
    
);
}
export default ScoresBoard*/