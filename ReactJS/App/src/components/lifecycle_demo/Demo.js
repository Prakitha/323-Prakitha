import { Component } from "react";
class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:props.name
        }
        console.log("Inside constructor");
    }
    f1 = () => {
        this.setState(
            {
                name: this.state.name + Math.floor(Math.random() * 10)
                
            }
        )
        console.log("new name is"+this.state.name);

    }
    componentDidMount() {
        console.log("Inside componentDidMount");
    }
    static getDerivedStatementFromProps(props, state) {
        console.log("Inside getDerivedStatementFromProps");
    }
    render() {
        console.log("Insdie render");
        return (
            <div style={{ border: "5px solid maroon" }}>
                <hr />Life Cycle demo<hr />
                Hello my name is {this.state.name}
                <br /><button onClick={this.f1}>Change Name</button>
            </div>
        )
    }
    // update
    shouldComponentUpdate(nextprops, nextstate) {
        console.log("Inside shouldComponentUpdate");
        if(this.state.name.indexOf("3")!=-1)
        return true;
        else
        return false;
    }
    getSnapshotBeforeUpdate(prevprops, prevstate) {
        console.log("Inside getSnapshotBeforeUpdate");
    }
    componentDidUpdate(prevprops, prevstate, snapshot) {
        console.log("Inside componentDidUpdate");
    }
    //Unmounting
    componentWillUnmount() {
        console.log("Inside componentWillUnmount");

    }
}
export default LifeCycleDemo