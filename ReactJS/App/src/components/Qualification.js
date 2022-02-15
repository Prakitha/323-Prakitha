
import {Component} from 'react';

class Qualification extends Component{

    render(){
        return (
    
<h4> Qualification <ul>
            {Array.from(this.props.qualification).map((item) => (
              <li>{item}</li>
            ))}
          </ul></h4>
        )
    };

}

export default Qualification;
