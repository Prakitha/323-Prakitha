import React,{ Component,createRef } from "react";

class FormDemo extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.inputAgeRef=createRef();
        
    }
    handleSubmit(e){
        e.preventDefault();
    }
    render(){
        return(
            <div>
               
               Uncontrolled Form Demo
                <form id="form1" onSubmit={this.handleSubmit}>
                    <input type="text" name="age" ref={this.inputAgeRef}/>
                    <button type="submit" name="button1">Submit</button>
                </form>

            </div>
        )
    }
}
export default FormDemo;