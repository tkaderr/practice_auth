import {combineReducers} from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  //auth state is manufactured by authreducer
  auth:authReducer

});
