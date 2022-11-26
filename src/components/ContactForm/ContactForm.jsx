import { Component } from 'react';

import ContactName from '../ContactName/ContactName';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    this.props.onSubmit(name, number);

    this.reset();
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <ContactName name={name} number={number} onChange={this.handleChange} />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
