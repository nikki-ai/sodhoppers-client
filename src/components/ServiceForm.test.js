import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import ServiceForm from './ServiceForm';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(
    <BrowserRouter>
      <ServiceForm />
    </BrowserRouter>,
    div
  );

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});