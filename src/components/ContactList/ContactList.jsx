import React, { useEffect } from 'react';
import { selectVisibleContacts } from 'store/contacts/selectors.js';
import Contacts from '../Contacts/Contacts.jsx';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/contacts/operations.js';
import Loader from 'components/Loader/Loader.jsx';

const ContactList = () => {
  const { contacts, isLoading } = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts(contacts));
  }, [contacts, dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);
  console.log('vC', visibleContacts);
  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.contactList}>
        {visibleContacts.map(contact => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};
export default ContactList;
