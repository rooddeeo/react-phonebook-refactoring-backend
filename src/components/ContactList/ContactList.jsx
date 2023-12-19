import { selectVisibleContacts } from 'store/contacts/selectors.js';
import Contacts from '../Contacts/Contacts.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  console.log('vC', visibleContacts);
  return (
    <>
      <ul className={css.contactList}>
        {visibleContacts.map(contact => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};
export default ContactList;
