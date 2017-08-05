import {FETCH_USER} from '../actions/types';

//default state set to null so when user opens up application for the very first time, we dont know if they are logged in so set default to null state
export default function(state=null, action ){
  console.log(action);
  switch(action.type){
    case FETCH_USER:
      return action.payload || false; //return statement could return user model or empty string. Using JS we can tag on the or statement of false. ALso the redux store is aware of the state logged in or not
    default:
      return state;
  }
}
