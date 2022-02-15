import './App.css';
import User from './components/User';
import Person from './components/Person';
import ScoreCard from './components/scoreBoard/ScoreCard';
import LifeCycleDemo from './components/lifecycle_demo/Demo';
import FruitHolder from './components/Context_demo/FruitHolder';
import FruitContext from './components/Context_demo/FruitContext';
import Greeting from './components/Functional-Component/Greeting';
import GreetingES6 from './components/Functional-Component/GreetingES6';
import PersonComp from './components/Functional-Component/PersonComponent';
import ScoreBoard from './components/scoreboard';
import MyEventHandling from './components/EventHandling-demo/MyEventHandling';
import FormDemo from './components/Form-Handling/Form1';

import ControlledComponentFormDemo from "./components/Form-Handling/ControlledComponentFormDemo";
import ControlledComponentFormDemoWithMoreFormElements from "./components/Form-Handling/ControlledComponentFormDemoWithMoreElements";
import PlayerRegistration from "./components/Form-Handling/PlayerRegistration";
import { Route, Routes } from "react-router-dom";
//import { NavLink } from "react-router-dom";
import NoPageFound from "./components/NoPageFound";
import HelloWorldFunc from "./components/Hello2";
import PlayerDetails from './components/PlayerDetails';
import NavBar from "./components/NavBar";
import Playerlist from "./components/PlayerList";
import ReduxDemo from '../../demo/src/components/ReduxDemo';
import ReducerConceptDemo from './components/Redux-demo/redux-getting-started';
//import Player from "./components/Player";
function App() {
  return (
    <Routes>
      <Route path="/redux/reducer-demo" element={<ReducerConceptDemo />} />
      <Route path="/redux/reducer-player" element={<ReducerPlayer />} />
      <Route path="/redux/reduxDemo" element={<ReduxDemo />} />
      <Route path="/" element={<Home />} />

      {/* nested routing demo.............................. */}
      <Route path="/test" element={<GreetingES6 />}>
        <Route path="form-demos1" element={<ControlledComponentFormDemo />} />
        <Route path="form-demos2" element={<ControlledComponentFormDemoWithMoreFormElements />} />
        <Route path="form-demos3" element={<FormDemo />} />
      </Route>

      {/* Demo params */}
      <Route path="/hello/:city" element={<HelloWorldFunc />} />
      <Route path="/hello2/:city" element={<HelloWorldFunc name="prakitha" />} />
      <Route path="/hello2/:city/:country" element={<HelloWorldFunc name="Samrudh" />} />

      <Route path="/player/:name" element={<PlayerDetails name="" />} />
      <Route path="/player/:name/:age" element={<PlayerDetails name="" />} />
      <Route path="/player/:name/:age/:role" element={<PlayerDetails name="" />} />
      <Route path="/player/:name/:age/:role/:country" element={<PlayerDetails name="" />} />
      <Route path="/player/:name/:age/:role/:country/:totRuns" element={<PlayerDetails name="" />} />


      <Route path="/apps" element={<App1 />} />
      <Route path="/players" element={<Playerlist />} />
      <Route path="/form-demos" element={<PlayerRegistration />} />
      <Route path="/form-demos1" element={<ControlledComponentFormDemo />} />
      <Route path="/form-demos2" element={<ControlledComponentFormDemoWithMoreFormElements />} />
      <Route path="/form-demos3" element={<FormDemo />} />
      <Route path="*" element={<NoPageFound />} />
    </Routes>

  )
};

function Home() {
  return (
    <NavBar />
    // <div>
    //   <Link style={{ margin: "20px" }} to="/">Home</Link>
    //   <Link style={{ margin: "20px" }} to="/apps">App1</Link>
    //   <Link style={{ margin: "20px" }} to="/form-demos">PlayerRegistration</Link>
    //   <Link style={{ margin: "20px" }} to="/form-demos1">ControlledFormDemo</Link>
    //   <Link style={{ margin: "20px" }} to="/form-demos2">ControlledFormDemoWithMore</Link>
    //   <Link style={{ margin: "20px" }} to="/form-demos3">FormDemo</Link>
    // </div>

    //  <div>
    //   <NavLink style={{ margin: "20px" }} to="/">Home</NavLink>
    //   <NavLink style={{ margin: "20px" }} to="/apps">App1</NavLink>
    //   <NavLink style={{ margin: "20px" }} to="/form-demos">PlayerRegistration</NavLink>
    //   <NavLink style={{ margin: "20px" }} to="/form-demos1">ControlledFormDemo</NavLink>
    //   <NavLink style={{ margin: "20px" }} to="/form-demos2">ControlledFormDemoWithMore</NavLink>
    //   <NavLink style={{ margin: "20px" }} to="/form-demos3">FormDemo</NavLink>
    // </div>
  )
}

function App1() {
  return (

    <FruitContext.Provider value={{ x: 2, y: 5 }}>
      <NavBar />

      {/* router demo */}


      {/* event handling */}
      <PersonComp />
      <MyEventHandling />
      <FormDemo />
      <ControlledComponentFormDemo />
      <ControlledComponentFormDemoWithMoreFormElements />
      <PlayerRegistration />



      {/* functional coponent */}
      <Greeting name="Prakitha" />
      <GreetingES6 name="Samrudh" />
      <Person name="Prakitha" />
      <ScoreBoard />


      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          Hello Prakitha
          {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
          <br />
          <a
            className="App-NavLink"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          ><h4>Click here to Learn React</h4><br />
            <h4>HOLA</h4>
            <h2 id="myH2">HI</h2>

          </a>
          <User name="Prakitha" image="images/1.jpg" popularity={0} scores={0} />
          <User name="Praki" popularity={0} scores={0} />
          <Person name="Samrudh" email="sam.reddy@gmail.com" />
          <ScoreCard  >
            {/* <Player name="Virat" score={60} /> */}
            {/* <Player name="Rohit"  score={80}/> */}
          </ScoreCard>
          <LifeCycleDemo name="Prakitha" />

          <FruitHolder />

        </header>
      </div>
    </FruitContext.Provider>

  );
}

export default App