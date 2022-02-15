import {Component} from 'react';

class Hobby extends Component{

    render(){
        return (
    
<h3>Hoobies<ul>
            {Array.from(this.props.hobby).map((item) => (
              <li>{item}</li>
            ))}
          </ul></h3>
        )
    };

}

export default Hobby;
