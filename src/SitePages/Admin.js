import React from 'react';
import AuthApiService from '../services/auth-api-service';
import Context from '../context';

class Admin extends React.Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = Context;

  state = { error: null };

  firstInput = React.createRef();

  handleSubmitAdmin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
        this.props.history.push('/adminDashboard');
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };
  componentDidMount() {
    this.firstInput.current.focus();
  }
  render() {
    const { error } = this.state;
    return (
      <div>
          <section className='pageTitle'>
          <h2>Admin</h2>
        </section>
        <form onSubmit={this.handleSubmitAdmin}>
          <div role='alert'>{error && <p>{error}</p>}</div>
          <label htmlFor='username'>Username:</label>
          <br />
          <input
            ref={this.firstInput}
            type='text'
            id='username'
            name='username'
          />
          <br />
          <label htmlFor='password'>Password:</label>
          <br />
          <input type='text' id='password' name='password' />
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Admin;
