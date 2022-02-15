import React, { Component } from "react";

import Person from "./Person";
import Message from "./Message";
import Commentory from "./Commentary";
class ScoreCard extends Component {

    constructor(props) {
        super(props);

        this.ref1 = React.createRef();
        this.ref2 = React.createRef();
        this.ref3 = React.createRef();
        this.ref4 = React.createRef();
        //var 
    }

    changeScore = () => {
        this.ref1.current.f1();
        this.ref2.current.f1();

        var score1 = this.ref1.current.state.score;
        var score2 = this.ref2.current.state.score;
        if (score1 > 60) {
            this.ref3.current.setState({ message: "winner is Prakitha" })
        } else if (score2 > 60) {
            this.ref3.current.setState({ message: "winner is Samrudh" })
        };
var lastScore1=this.ref1.current.state.lastScore;
var lastScore2=this.ref2.current.state.lastScore;

   this.ref4.current.setState((state,props)=>
   ({ commentary: `${this.ref1.current.props.name} scored runs ${lastScore1} and ${this.ref2.current.props.name} scored ${lastScore2}`}));

    }  
    
    render() {

        return (
            <div style={{ border: "5px  solid blue" }}>
                <h1 style={{ textAlign: "center red" }}>Tennis ScoreBoard</h1>
                <Person name="Prakitha" ref={this.ref1} score={0} />
                <Person name="Samrudh" ref={this.ref2} score={0} />
                <button onClick={this.changeScore} >Change Score</button>
                <Message ref={this.ref3} />
                <Commentory ref={this.ref4}/>
            </div>
        )

    }


}
export default ScoreCard;