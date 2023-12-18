import React from 'react';
import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { contactDelete } from 'store/contacts/operations';

const Contacts = ({ contact }) => {
  const dispatch = useDispatch();
  const deleteContact = id => {
    dispatch(contactDelete(id));
  };
  return (
    <div className={css.contacts}>
      <li className={css.contactsItem}>
        {contact.name}: {contact.number}
      </li>
      <button
        className={css.contactsBtn}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contacts;
