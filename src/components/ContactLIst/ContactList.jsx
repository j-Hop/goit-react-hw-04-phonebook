import PropTypes from 'prop-types';
import css from './Contact.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => {
      return (
        <li className={css.items} key={id}>
          <p>{name} </p>
          <p>: {number}</p>
          <button type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};