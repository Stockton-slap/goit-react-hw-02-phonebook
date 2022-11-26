import { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;

    return (
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
