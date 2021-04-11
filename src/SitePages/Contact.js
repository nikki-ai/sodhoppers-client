import React from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className='pageTitle'>
          <h2>Contact Us</h2>
        </section>
        <section className='row'>
          <div className='contact'>
            <h4>To Schedule a Service</h4>
            <Link to='/services'>&gt;Click Here&lt;</Link>
          </div>
          <div className='contact'>
            <h4>Call or text:</h4>
            <a href='tel:5554280940'>555-1234</a>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
