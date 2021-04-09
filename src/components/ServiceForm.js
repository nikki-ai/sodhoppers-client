import React from 'react';

class ServiceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      number: null,
      email: null,
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.handleSubmit({
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
    });
    this.setState({ name: '', number: '', email: '' });
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label htmlFor='name'>Name:</label>
          <input
            onChange={this.onChange}
            type='text'
            name='name'
            placeholder='Enter your name here:'
            value={this.state.name}
            required
          />
          <br />
          <label htmlFor='name'>Phone number:</label>
          <input
            onChange={this.onChange}
            type='text'
            name='number'
            placeholder='Enter your phone number:'
            value={this.state.number}
            required
          />
          <br />
          <label htmlFor='name'>E-mail:</label>
          <input
            onChange={this.onChange}
            type='text'
            name='email'
            placeholder='Enter your E-mail here:'
            value={this.state.email}
            required
          />
          <br />
          {/* <label htmlFor='content'>Content:</label>
          <textarea
            name='noteContent'
            placeholder='Enter your note content here: '
            required
          />
          <br /> */}
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default ServiceForm;
