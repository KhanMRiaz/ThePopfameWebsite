import { combineReducers } from 'redux';
import chatReducer from './Reducers/chatReducer';
import loginReducer from './Reducers/loginReducer';
import serviceReducer from './Reducers/serviceReducer';

export default combineReducers({
    user: loginReducer,
    service: serviceReducer,
    chat: chatReducer
});