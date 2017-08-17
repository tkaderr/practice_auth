import axios from 'axios';
import {FETCH_USER} from './types';

//define actionCreator
export const fetchUser = () =>

  //redux-thunk
  async dispatch => {
    //relative path to backend through the proxy-only for dev but no proxy in production
    const res = await axios.get('/api/current_user')
    dispatch({ type: FETCH_USER, payload: res.data });
  };


//we are getting the token from the stripe api and then passing the token to the action creator
//we are making a post request because we want to save something to the database
//we want to fetch back that user data
export const handleToken = (token) =>

async dispatch => {
  const res = await axios.post('api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
}



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
