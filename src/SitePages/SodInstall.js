import React from 'react';
import ServiceForm from '../components/ServiceForm';
import DashboardApiService from '../services/dashboardApi';

class SodInstall extends React.Component {
  handleSubmitSodInstall(e) {
    //request to sodInstall
    DashboardApiService.postNewSod(e);
  }

  render() {
    return (
      <div>
        <h2>Request a Sod Installation</h2>
        <ServiceForm handleSubmit={this.handleSubmitSodInstall} />
      </div>
    );
  }
}

export default SodInstall;
