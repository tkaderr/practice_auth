import axios from 'axios';
import {FETCH_USER} from './types';

//define actionCreator
export const fetchUser = () =>

  //redux-thunk
  async dispatch => {
    //relative path to backend through the proxy-only for dev but no proxy in production
    const res=await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
  };



// export const fetchUser = () => {
//
//   //redux-thunk
//   return function(dispatch) {
//     //relative path to backend through the proxy-only for dev but no proxy in production
//     axios.get('/api/current_user')
//     .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
//
// };
