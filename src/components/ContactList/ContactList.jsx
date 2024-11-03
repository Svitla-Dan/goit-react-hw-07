import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectFilteredContacts,
} from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = () => {
  const allContacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length === 0) {
    return (
      <p className={style.noContacts}>
        {allContacts.length === 0
          ? 'There are no contacts in the phonebook'
          : 'There are no contacts matching your query'}
      </p>
    );
  }

  return (
    <ul className={style.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
