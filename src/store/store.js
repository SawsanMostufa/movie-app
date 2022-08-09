import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducer from './reducers/combineReducers'

const store = createStore(combineReducer,composeWithDevTools());


export default store;

