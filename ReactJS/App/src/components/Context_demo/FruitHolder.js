import React, { Component } from "react";
import Apple from "./Apple";
import Mango from "./Mango";
import FruitContext from "./FruitContext";
class FruitHolder extends Component {
    render() {
        return (
            <div style={{ border: "10px solid pink" }}>
                <FruitContext.Provider value={{ x: 1, y: 5 }}>

                    <Apple name="apple 1" />
                    <Mango name="mango 1" />
                </FruitContext.Provider>

            </div>
        )
    }
}
export default FruitHolder