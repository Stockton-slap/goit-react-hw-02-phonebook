import { Component } from 'react';

import PropTypes from 'prop-types';

class ContactList extends Component {
  render() {
    const { visibleContacts, deleteContact } = this.props;

    return (
      <ul>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button
                type="button"
                name={name}
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
