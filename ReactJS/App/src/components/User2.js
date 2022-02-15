import {Component} from "react";
class User2 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:props.name,
            age:10 ,
        }
    }
    render() {
        return (
            <div>
            <h1>My name is  {this.state.name}. My age is {this.state.age}.</h1>
            <img src={this.props.image} width={100} height={150} 
            alt="Image not found"/>
            {this.props.children}
            </div>
        )
    }
}
export default User2;