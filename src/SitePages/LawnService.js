import React from 'react';
import ServiceForm from '../components/ServiceForm';
import DashboardApiService from '../services/dashboardApi';
// import { Link } from 'react-router-dom';

class LawnService extends React.Component {
  handleSubmitLawnService(e) {
    //request to LawnService
    DashboardApiService.postNewLawn(e);
  }

  render() {
    return (
      <div>
        <h2>Request a Lawn Service</h2>
        <ServiceForm handleSubmit={this.handleSubmitLawnService} />
      </div>
    );
  }
}

export default LawnService;
