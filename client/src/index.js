import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';



import App from './components/App';
import reducers from './reducers';

//create actionCreator


//use createstore to create an instance of redux store
//first argument is all the reducer
//second argument is the initial state
//thrd argument is middleware
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//reactdom takes two arguments: root component/ where we are rendering the root component
//user JSX tag because reactdom expects a component instance by creating JSX tags
//open public->index.html to see the root div where the component will load
//the provider tag is a react comp that knows how to read changes in the redux store, it will let all children components that there is a change, and update
ReactDOM.render(

  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')

);

console.log("Stripe Key:", process.env.REACT_APP_STRIPE_KEY);
console.log("Env:", process.env.NODE_ENV);
