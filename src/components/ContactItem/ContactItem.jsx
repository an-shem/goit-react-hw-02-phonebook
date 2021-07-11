import PropTypes from 'prop-types';
import { Contact, Text } from './ContactItem.styled';

export default function ContactItem({ contact: { name, number } }) {
  return (
    <Contact>
      <Text>
        {name}: {number}
      </Text>
    </Contact>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};
