import React,{ Component } from "react";

class ScoreBoard extends Component{
    constructor(props) {
        super(props);
this.ref1=React.createRef();
this.ref2=React.createRef();

    }
    
    changeScore = () => {
        this.ref1.current.f1();
        this.ref2.current.f1();
    }
    f1 = () => {
        this.setState(
            {
                score: this.state.score + Math.floor(Math.random() * 10)
            }
        );
    }
render(){
    return(
        <div style={{border:" 5px solid green"}}>
            <h1 style={{textAlign:"center"}}>Tennis</h1>
            <h3>player1:  {this.props.name1}.ref={this.ref1} score:{0}</h3>
            <h3>Player2:{this.props.name2}       ref={this.ref2}       score:{0}</h3>

                
        <button onClick={this.changeScore}>Click here to change score</button>
                </div>
    )
}
}
export default ScoreBoard