import { Component } from "react";
class Message extends Component{
    constructor(props) {
        super(props);

        this.state = {
            message:"",

            
        }
    }

    render(){
        return(
            <div>
                <title>Commentory</title>
                <h4> {this.state.message}</h4>
                </div>

        )
    }
}
export default Message