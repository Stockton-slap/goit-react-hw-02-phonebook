import { Component } from 'react';

import PropTypes from 'prop-types';

import {
  ContactInfo,
  ContactInfoLabel,
  ContactInfoValues,
} from './ContactName.styled';

class ContactName extends Component {
  render() {
    const { name, number, onChange, children } = this.props;

    return (
      <ContactInfo>
        <ContactInfoLabel>
          Name
          <br />
          <ContactInfoValues
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChange}
          />
        </ContactInfoLabel>
        <br />
        <ContactInfoLabel>
          Number
          <br />
          <ContactInfoValues
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChange}
          />
        </ContactInfoLabel>
        <br />
        {children}
      </ContactInfo>
    );
  }
}

ContactName.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactName;
