import React,{Component} from "react";
import FruitContext from "./FruitContext";
class Seed extends Component{
    static contextType=FruitContext;
constructor(props){
    super(props);
    this.state={
        myX:0,
        myY:0
    }
}
changeContext=()=>{
    this.context.x=this.context.x+1;
    this.context.y=this.context.y+1;
this.setState(
    {
        myX:this.context.x,myY:this.context.y
    }
)
}
    render(){
        return(
            <p> Seed Info:{this.props.name}
            I am from:{this.state.myX}, I am  from:{this.state.myY}
            <button onClick={this.changeContext}> Change context</button>
            </p>
        )
    }
}
export default Seed;