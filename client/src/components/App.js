import React, {Component} from 'react';
//BrowserRouter is the brains - how to behave based on the url routes
//route is responsible for the rules
import {BrowserRouter, Route} from 'react-router-dom'; //contains react router helpers to help you navigate around the dom
import Header from './Header';
import Landing from './Landing';

//get the connect module so we can give certain components the ability to call actioncreators
import {connect} from 'react-redux';
import * as actions from '../actions';


const Dashboard= ()=> <h2>Dashboard</h2>;
const SurveyNew= ()=> <h2>SureyNew</h2>;



//create App component
class App extends Component  {
  //nginit when component render
  componentDidMount(){

    this.props.fetchUser();
  }

  render(){
      return (
        <div className = "container">
          <BrowserRouter>
            <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            </div>
          </BrowserRouter>
        </div>
      );
    }
};


//first argument for connect is mapstatetoprop
//second argument for all the actioncreators that we want to wire up
//Once we pass in all the actions they are assigned to the app component as props
export default connect(null, actions)(App);
