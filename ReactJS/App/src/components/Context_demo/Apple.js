import React,{Component} from "react";
import FruitContext from "./FruitContext";
import Seed from "./Seed";
class Apple extends Component{
    static contextType=FruitContext;

    render(){
        return(
            <div> Apple Name:{this.props.name} ,
                        I am from:{this.context.x}, I am  from:{this.context.y}

            <Seed name="seed"/>
            </div>
        )
    }
}
export default Apple;