import PropTypes from 'prop-types';
import ContactItem from '../ContactItem';

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
