import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Email Survey Manager"
        description="$5 for 5 email credits"

        // How much to charge the user
        // 500 cents (5 US dollars)
        amount={500}

        // Callback function for after we recieve auth token from stripe
        token={token => this.props.handleToken(token)}

        // API key
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);