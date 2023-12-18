import Selectors from 'store/contacts/selectors.js';
import Contacts from '../Contacts/Contacts.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

// const selector = state => {
//   console.log('select');
//   return state.contacts;
// };

const ContactList = () => {
  // const { contacts, filter } = useSelector(selector);

  // const lowerCase = filter.toLowerCase();
  // const visibleContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(lowerCase)
  // );

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
