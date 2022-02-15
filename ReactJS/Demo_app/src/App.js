import { Route, Routes } from "react-router";
import ReduxDemo from './components/ReduxDemo';
import store from "./store/Mystore";
import { Provider } from 'react-redux';
import NavBar from "./components/NavBar";

import './App.css';
import NewsRenderDemo from "./components/NewsRenderDemo";
import NewNodeReducer from "./reducers/NewNodeReducer";
function App() {
  return (
    <Provider store={store}>
    <Routes >
   
    <Route path="/reduxDemo" element={<ReduxDemo />} />
   <Route path="/news" element={<NewsRenderDemo />} />
   <Route path="/" element={<Home />} /> 
<Route path="/newplayers" element={<NewNodeReducer />}/>
    </Routes >
    </Provider>


    
  );
};

function Home() {
  return (
    <NavBar />
    )
  }
export default App;
