import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  // Determines content to show based on users login status
  renderContent() {
    switch (this.props.auth) {
      case null:
        return; // returns nothing if null

      case false: 
        return <li><a href="/auth/google">Login With Google</a></li>;

      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    // this.props contains the users login object
    // console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Email Survey Manager
          </Link>
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