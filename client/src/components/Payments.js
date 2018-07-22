import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    debugger;
    
    return (
      <StripeCheckout
        // How much to charge the user
        // 500 cents (5 US dollars)
        amount={500}

        // Callback function for after we recieve auth token from stripe
        token={token => console.log("Payments token: ", token)}

        // API key
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;