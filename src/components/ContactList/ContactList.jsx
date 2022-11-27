import { Component } from 'react';

import PropTypes from 'prop-types';

import { List, Item, DeleteBtn } from './ContactList.styled';

class ContactList extends Component {
  render() {
    const { visibleContacts, deleteContact } = this.props;

    return (
      <List>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              {name}: {number}
              <DeleteBtn
                type="button"
                name={name}
                onClick={() => deleteContact(id)}
              >
                Delete
              </DeleteBtn>
            </Item>
          );
        })}
      </List>
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
