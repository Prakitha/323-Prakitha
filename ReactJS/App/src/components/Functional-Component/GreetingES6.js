import { useState } from "react";

const GreetingES6 = (props) => {
    // var initAge=10;
    const [age, setAge] = useState(10);
    const changeAge = () => {
        if (age % 5 == 0)
            setAge(age + 2);
        else
            setAge(age + 1)
    }
    // state of string type variable
const [name1,setNm]=useState("Prakitha");
// state of object type variable
const[address,setAddress]=useState({num:"1-36/1/A",area:"Chananagar",state:"Telangana",city:"Hyderabad"})

    return (
        <div>Hello {props.name} my age is {age}<br />
            <button onClick={() => setAge(age + 1)}>Change increase +1</button><br />
            <button onClick={changeAge}>Click to change Age</button>
            <br/>
            name:{name1}
            <button onClick={()=>setNm("Samrudh")}>click to see the name</button><br/>
            Address :{address.num},{address.area},{address.state}<br/>
            <button onClick={()=>setAddress({...address,area:"tash"})}>Click to see the address</button>
            </div>

    );
}
export default GreetingES6;
