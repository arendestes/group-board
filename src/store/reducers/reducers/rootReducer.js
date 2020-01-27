import projectRudecer from './projectReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    auth: authReducer,
    project: projectRudecer
})


export default rootReducer;