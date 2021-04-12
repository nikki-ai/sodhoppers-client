import React from 'react';
import ServiceForm from '../components/ServiceForm';
import DashboardApiService from '../services/dashboardApi';

class LawnService extends React.Component {
  handleSubmitLawnService(e) {
    //request to LawnService
    DashboardApiService.postNewLawn(e);
    alert('Your request has been sent!');
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
