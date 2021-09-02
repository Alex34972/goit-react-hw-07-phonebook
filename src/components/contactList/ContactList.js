import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const deletContact = contactId => {
    dispatch(actions.deleteContact(contactId));
  };
  const getFilterContacts = state => {
    const { filter, items } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const contacts = useSelector(getFilterContacts);
  return (
    <ul className={s.ContactList}>
      {contacts.map(
        ({ id, name, number }) =>
          name.length > 0 &&
          number.length > 0 && (
            <li className={s.contact} key={id}>
              {name}: {number}
              <button
                className={s.contactBtn}
                type="button"
                onClick={() => deletContact(id)}
              >
                Delete
              </button>
            </li>
          ),
      )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
export default ContactList;
