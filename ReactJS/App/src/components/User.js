import { Component } from "react";
import Address from "./Address";
import Hobby from "./Hobby";
import Qualification from "./Qualification";

const initialState = {
    age: 10,
    phone: 9800001123
};

var i = 0;

class User extends Component {

    constructor(props) {
        super(props);
        this.state = initialState;
        this.state = { ...this.state, popRating: props.popularity  }
        

    }
    changePopularity = () => {
        // this.props.popularity;
        this.setState((state,props) => ({
            popRating: this.state.popRating + 1
        }));
    }
    
    render() {
        return (
            <div style={{border:"5px solid red"}}>
                <h1>My name is  {this.props.name}. My age is {this.state.age}.</h1>
                <h2>My current popularity :{this.state.popRating}</h2><br/>
                <button onClick={this.changePopularity}>Click here to increase popularity</button><br/>
                <img src={this.props.image} width={100} height={150}
                    alt="Image not found" />
                <Address address={["Hyderabad", "Chnadanagar ", "Lingumpally"]} />
                <Hobby hobby={["Music , Cooking "]} />
                <Qualification qualification={["B.tech", "M.tech"]} />
               
        </div>
            
        )
    }
}

export default User;
