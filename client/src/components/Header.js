import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  // Determines content to show based on users login status
  renderContent() {
    switch (this.props.auth) {
      case null: 
      return;

      case false:;
      return <li><a href="/auth/google">Login With Google</a></li>;

      default: 
        return <li><a href="/api/logout">Logout</a></li>;
      
    }
  }

  render() {
    // this.props contains the users login object
    // console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Email Survey Manager</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

// Passes the state to the Header object as props
function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);