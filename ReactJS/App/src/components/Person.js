import { Component } from "react";

 class Person extends Component {
    render() {
        var d = this.props.age;
        var e = this.props.address;
        return (
            <h3>I am {this.props.name}.My age is {d === undefined ? "18" : d}.My email id is {this.props.email}. I am from {e === undefined ? "Hyderabad" : e}</h3>)
    }
}
export default Person;