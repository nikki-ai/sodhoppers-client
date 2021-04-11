import React from 'react';
import { Link } from 'react-router-dom';

class Services extends React.Component {
  render() {
    return (
      <div>
        <section className='pageTitle'>
          <h2>Services</h2>
        </section>
        <div className='service'>
          <h3>Clean Up</h3>
          <p>
            A total yard clean up including de-weeding beds, trimming, and mulch
          </p>
          <Link to='/cleanUp' className='service-link'>&gt;Request a Cleanup&lt;</Link>
        </div>
        <div className='service'>
          <h3>Lawn Service</h3>
          <p>Weekly service including mowing, edging, and blowing</p>
          <Link to='/lawnService' className='service-link'>&gt;Request a Lawn Service&lt;</Link>
        </div>
        <div className='service'>
          <h3>Sod installation</h3>
          <p>Includes prepping, spreading sod mix, and laying sod</p>
          <Link to='/sodInstallation' className='service-link'>&gt;Request a Sod installation&lt;</Link>
        </div>
      </div>
    );
  }
}

export default Services;
