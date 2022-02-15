import { combineReducers, applyMiddleware, createStore } from 'redux';
//import PlayerReducerUsingImmutableJS from '../reducers/playerReducerUsingImmutableJS';
import SecondReducer from '../reducers/SecondReducer';
import ThirdReducer from '../reducers/ThirdReducer';
import rootSaga from '../sagas/helloSaga';
import NewsReducer from '../reducers/NewsReducer';
//import PlayerReducer from './reducers/playerReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  //reducer1: PlayerReducer,
  reducer2: SecondReducer,
  reducer3: ThirdReducer,
  reducer4: NewsReducer
});


const store = createStore(
  //PlayerReducer,
  // PlayerReducerUsingImmutableJS,
  rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //rootReducer,applyMiddleware(sagaMiddleware)
);
export default store;

   sagaMiddleware.run(rootSaga);

    store.dispatch({type:"ADD_ONE"});