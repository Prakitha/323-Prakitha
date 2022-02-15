
import logo from './logo.svg';
//import {Redirect} from 'react-router';
import './App.css';
 
import User from './components/User';
import User2 from './components/User2';
import HelloWorld from './HelloWorld';
import Address from './components/Address';
import Hobbies from './components/Hobbies';
import Qualification from './components/Qualification';
import ScoreCard from './components/Scorecard/ScoreCard';
 
import LifeCycleDemo from './components/Component_demo';
import FruitHolder from './components/Context_demo/FruitHolder';
import FruitContext from './components/Context_demo/FruitContext';
 
 
import Greeting from './components/Function-Components/Greeting';
import GreetingES6 from './components/Function-Components/GreetingES6';
//import Person from './components/Function-Components/Person';
 
 
import MyEventHandling from './components/EventHandling/MyEventHandling';
 
import Pure_Component from './components/Pure_Component';
 
import UncontrolledFormDemo from './components/Form_Handling/UncontrolledFormDemo.js';
import ControlledComponentFormDemo from './components/Form_Handling/ControlledComponentFormDemo';
import ControlledForm_function from './components/Form_Handling/ControlledForm_function';
import ControlledComponentFormDemoWithMoreElements from './components/Form_Handling/ControlledComponentFormDemoWithMoreElements';
import ControlledForm_MoreElements from './components/Form_Handling/ControlledForm_MoreElements';
import Player_Registration_Form from './components/Form_Handling/Player_Registration_Form';
import Player_Registration_Usingfunction from './components/Form_Handling/Player_Registration_Usingfunction';
 
//Routing
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import NoPageFound from "./components/NoPageFound";
import HelloWorldFunc from "./components/Function-Components/HelloWorldFunc";
import PlayerDetails from "./components/Function-Components/PlayerDetails";
import PlayerList from "./components/Function-Components/PlayerList";
import NavBar from "./components/NavBar";
 
 
 
 
 
function App() {
 
  return (
    <BrowserRouter>
      <Routes>
 
      <Route path="/" element={<Home />} />
 
        {/* Nested routing  */}
        <Route path="/test" element={<GreetingES6 />}>
          <Route path="events-demos" element={<MyEventHandling />} />
          <Route path="form-demos1" element={<ControlledComponentFormDemoWithMoreElements />} />
          <Route path="form-demos2" element={<UncontrolledFormDemo />} />
          <Route path="form-demos3" element={<ControlledForm_function />} />
        </Route>
 
 
        {/* Demo params */}
        <Route path="/hello/:city" element={<HelloWorldFunc />} />
        <Route path="/hello2/:city/:stateOfCity" element={<HelloWorldFunc name={"Jenita"} />} />
        {/* Demo params */}
 
        <Route path="/player/:name" element={<PlayerDetails name="" />} />
        <Route path="/player/:name/:age" element={<PlayerDetails name="" />} />
        <Route path="/player/:name/:age/:types_player" element={<PlayerDetails name="" />} />
        <Route path="/player/:name/:age/:types_player/:country" element={<PlayerDetails name="" />} />
        <Route path="/player/:name/:age/:types_player/:country/:to_runs" element={<PlayerDetails name="" />} />
        <Route path="/player" element={<PlayerList />}/>
 
 
 
        <Route path="/apps" element={<App1 />} />
        <Route path="/events-demos" element={<MyEventHandling />} />
        <Route path="/form-demos1" element={<ControlledComponentFormDemoWithMoreElements />} />
        <Route path="/form-demos2" element={<UncontrolledFormDemo />} />
        <Route path="/form-demos3" element={<ControlledForm_function />} />
        <Route path="*" element={<NoPageFound />} />
 
 
 
 
        {/* <Redirect to="/" /> */} 
      </Routes>
    </BrowserRouter>
 
  )
};
 
// let activeClassName = "underline";
 
function Home() {
  return (
    <NavBar />
 
    //Using <a> anchor tag
    // {/* <div>
    //     <a style={{margin:"20px"}} href="/">Home</a>
    //     <a style={{margin:"20px"}} href="/apps">App1</a>
    //     <a style={{margin:"20px"}} href="/eventsdemo">Event Demo</a>
    //     <a style={{margin:"20px"}} href="/form-demos1">controlled Form  </a>
    //     <a style={{margin:"20px"}} href="/form-demos2">unControlled Form </a>
    //     <a style={{margin:"20px"}} href="/form-demos3">Advanced Controlled Form using function component </a>
    //     </div> 
    //   */}
 
    // //Using Link tag
    // <div>
    //   <Link style={{ margin: "20px" }} to="/">Home </Link>
    //   <Link style={{ margin: "20px" }} to="/apps">All Components in App1 </Link>
    //   <Link style={{ margin: "20px" }} to="/events-demos">Event Demo Page </Link>
    //   <Link style={{ margin: "20px" }} to="/form-demos1">Controlled Demo Page </Link>
    //   <Link style={{ margin: "20px" }} to="/form-demos2">UnControlled Demo Page </Link>
    //   <Link style={{ margin: "20px" }} to="/form-demos3">Controlled Demo Page uisng functional component  </Link>
    // </div>
 
    //Using navLink tag
    // <div>
    //   <NavLink activeClassName="active" style={{ margin: "20px" }} to="/">Home </NavLink>
    //   <NavLink style={{ margin: "20px" }} to="/apps">All Components in App1 </NavLink>
    //   <NavLink style={{ margin: "20px" }} to="/events-demos">Event Demo Page </NavLink>
    //   <NavLink style={{ margin: "20px" }} to="/form-demos1">Controlled Demo Page </NavLink>
    //   <NavLink style={{ margin: "20px" }} to="/form-demos2">UnControlled Demo Page </NavLink>
    //   <NavLink style={{ margin: "20px" }} to="/form-demos3">Controlled Demo Page uisng functional component  </NavLink>
    // </div>
  );
};