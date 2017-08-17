import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';


//With the StripeCheckout there are requirements needed:
//name is the header of the checkout box
//amount (defaults USD) and in units of cents
//token is expecting the authorization token back (callback). The callback function will run when we receive the token from Stripe
//StripeKey is the publishable api key
class Payments extends Component {
  render(){
    return (
      <StripeCheckout
        name = "Emaily"
        description = "Pay 5 bucks for survey"
        amount ={500}
        token = {token => this.props.handleToken(token)}
        stripeKey = {process.env.REACT_APP_STRIPE_KEY}
      >
      <button className= "btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
