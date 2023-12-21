import React, { useEffect } from 'react';
import { selectVisibleContacts } from 'store/contacts/selectors.js';
import Contacts from '../Contacts/Contacts.jsx';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'store/contacts/operations.js';
import Loader from 'components/Loader/Loader.jsx';
import ErrorBackEnd from 'components/ErrorBackEnd/ErrorBackEnd.jsx';

const ContactList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.isLoading);
  const errorBackEnd = useSelector(state => state.contacts.error);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {errorBackEnd && <ErrorBackEnd errorBackEnd={errorBackEnd} />}
      <ul className={css.contactList}>
        {visibleContacts.map(contact => (
          <Contacts key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};
export default ContactList;
