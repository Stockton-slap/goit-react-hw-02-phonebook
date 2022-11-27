import { Component } from 'react';

import PropTypes from 'prop-types';

import ContactName from '../ContactName';

import { AddContactBtn } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    isPressed: false,
  };

  handleSubmit = e => {
    e.preventDefault();

    const { contacts, onSubmit } = this.props;

    const { name, number } = this.state;

    const contactNames = contacts.map(contact => contact.name);

    if (contactNames.includes(name)) {
      alert(`${name} is already in contacts.`);
    } else {
      onSubmit(name, number);
    }

    this.setState({ isPressed: true });

    this.reset();
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value, isPressed: false });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number, isPressed } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <ContactName name={name} number={number} onChange={this.handleChange}>
          <AddContactBtn type="submit" isPressed={isPressed}>
            Add contact
          </AddContactBtn>
        </ContactName>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactForm;
