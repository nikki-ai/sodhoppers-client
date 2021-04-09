import React from 'react';
import { Link } from 'react-router-dom';

class Services extends React.Component {
  render() {
    return (
      <div>
        <section className='pageTitle'>
          <h2>Services</h2>
        </section>
        <div>
          <h3>Clean Up</h3>
          <p>
            A total yard clean up including de-weeding beds, trimming, and mulch
          </p>
          <Link to='/cleanUp'>Request a Cleanup</Link>
        </div>
        <div>
          <h3>Lawn Service</h3>
          <p>Weekly service including mowing, edging, and blowing</p>
          <Link to='/lawnService'>Request a Lawn Service</Link>
        </div>
        <div>
          <h3>Sod installation</h3>
          <p>Includes prepping, spreading sod mix, and laying sod</p>
          <Link to='/sodInstallation'>Request a Sod installation</Link>
        </div>
      </div>
    );
  }
}

export default Services;
