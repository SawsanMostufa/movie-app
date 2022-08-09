import { combineReducers } from "redux";
import languageReducer from './language'
import loaderReducer from './loader';
const combineReducer = combineReducers({
    language:languageReducer,
    loader:loaderReducer
})

export default combineReducer