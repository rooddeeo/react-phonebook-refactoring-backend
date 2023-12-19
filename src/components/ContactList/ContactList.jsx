import Selectors from 'store/contacts/selectors.js';
import Contacts from '../Contacts/Contacts.jsx';
import css from './ContactList.module.css';

const ContactList = () => {
  const visibleContacts = Selectors();
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
