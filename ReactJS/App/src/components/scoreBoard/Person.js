import { Component } from "react";

class Person extends Component {

    constructor(props) {
        super(props);

        this.state = {
            score: props.score,
            lastScore:0
        }
    }

    f1 = () => {
        
            
                //score: this.state.score + Math.floor(Math.random() * 10),
                let tempScore=Math.floor(Math.random()*10)
                this.setState({score:this.state.score+tempScore,lastScore:tempScore})
                
            
        
    }
    f2=()=>{
        alert("in parent class");
    }

    render() {

        return (
            <p>
                Name: {this.props.name} Score: {this.state.score}
            </p>
        )

    }

}

export default Person;