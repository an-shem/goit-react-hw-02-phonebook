import PropTypes from 'prop-types';

export default function ContactItem({ contact: { name, number } }) {
  return (
    <li>
      {name}: {number}
    </li>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
};
