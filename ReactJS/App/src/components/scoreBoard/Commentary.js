import { Component } from "react";
class Commentory extends Component{
    constructor(props) {
        super(props);

        this.state = {
            commentary:"",

            
        }
    }

    render(){
        return(
            <div>
                <title>Commentory</title>
                <h4> {this.state.commentary}</h4>
                </div>

        )
    }
}
export default Commentory