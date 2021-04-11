import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <section className='slogan'>
          <h2>You grow it... We mow it!!</h2>
        </section>
        <section>
          <h2>How to use:</h2>
          <p>
            Sodhoppers Lawncare is a web application that will provide users
            with a way to schedule lawn care services and from an admin
            perspective will provide a neat way to schedule clients via a drag
            and drop kanban style dashboard. To get started head to the services
            page and request a service. You can then log in to the admin
            Dashboard with Username: admin Password: pass to take a look at your
            submitted request and use the drag and drop features to move it to
            the appropriate column.
          </p>
        </section>
        <section>
          <h3>About Us</h3>
          <p>
            Sodhoppers Lawncare is a small family owned company started in
            Kingwood, Texas in 1993. We service the Kingwood/Atascocita area
            with weekly lawn service and other yard care services such as
            weeding, trimming, mulch, sod, etc... Give us a call at 555-1234.
          </p>
        </section>
      </div>
    );
  }
}

export default Home;
