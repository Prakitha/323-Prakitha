import React, { Component } from "react";
import FruitContext from "./FruitContext";
class Mango extends Component {
    static contextType = FruitContext;
    render() {
        return (
            <p> Mango Name:{this.props.name}
                I am from:{this.context.x}, I am  from:{this.context.y}

            </p>
        )
    }
}
export default Mango;