import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <div className="card-panel #f5f5f5 grey lighten-4">
        <h5>Use this fake credit card for Stripe API</h5>
        <div>Card Number: 4242 4242 4242 4242</div>
        <div>Expiration Date: Any date in the future</div>
        <div>CVC: 123</div>
      </div>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link className="btn-floating btn-large red" to="/surveys/new">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;