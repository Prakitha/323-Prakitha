
import {Component} from 'react';

class Address extends Component{
    render(){
        // var a = this.props.address

        return (
    
            <h4>Address<ul>
            {Array.from(this.props.address).map((item) => (
              <li>{item}</li>
            ))}
          </ul></h4>

        )
    };

}

export default Address;
