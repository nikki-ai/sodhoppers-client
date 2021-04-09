import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './css/app.css';
import Home from './SitePages/Home';
import Services from './SitePages/Services';
import Contact from './SitePages/Contact';
import Admin from './SitePages/Admin';
import AdminDashboard from './SitePages/AdminDashboard';
import cleanUp from './SitePages/CleanUp';
import SodInstall from './SitePages/SodInstall';
import LawnService from './SitePages/LawnService';

class App extends React.Component {

  render() {
    return (
      <div>
        <header>
          <Link to='/'>
            <h1>Sodhoppers Lawncare</h1>
          </Link>
          <nav>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/services'>Services</Link>
            <br />
            <Link to='/contactUs'>Contact Us</Link>
            <br />
            <Link to='/admin'>Admin</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/services' component={Services} />

          <Route path='/contactUs' component={Contact} />

          <Route path='/admin' component={Admin} />

          <Route path='/adminDashboard' component={AdminDashboard} />

          <Route path='/cleanUp' component={cleanUp} />

          <Route path='/lawnService' component={LawnService} />

          <Route path='/sodInstallation' component={SodInstall} />
        </Switch>
      </div>
    );
  }
}

export default App;
