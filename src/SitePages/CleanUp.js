import React from 'react';
import ServiceForm from '../components/ServiceForm';
import DashboardApiService from '../services/dashboardApi';

class CleanUp extends React.Component {
  handleSubmitCleanup(e) {
    //Submit request for Cleanup
    DashboardApiService.postNewClean(e);
  }

  render() {
    return (
      <div>
        <h2>Request a Cleanup</h2>
        <ServiceForm handleSubmit={this.handleSubmitCleanup} />
      </div>
    );
  }
}

export default CleanUp;
