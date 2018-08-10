import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        // returns nothing if null
        return;

      case false:
        return <a href="/auth/google">Login With Google</a>;

      default: 
        return <Link to="/surveys">Create Surveys</Link>;
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Email Survey Manager</h1>
        Collect feedback from your users
        <hr/>
        {this.renderContent()}
      </div>
    );
  }
};


// Passes the state to the Header object as props
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Landing);