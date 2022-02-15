import { createStore } from 'redux';
import PlayerReducerUsingImmutableJS from '../Reducers/playerReducerUsingImmutableJS.JS';

const store = createStore(
    /* PlayerReducer*/
    PlayerReducerUsingImmutableJS,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    export default store