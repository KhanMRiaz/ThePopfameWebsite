import { combineReducers } from 'redux';
import loginReducer from './Reducers/loginReducer';

export default combineReducers({
    user : loginReducer,
});