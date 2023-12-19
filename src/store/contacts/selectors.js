import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const Selectors = () => {
  const contacts = useSelector(state => state.contacts);
  console.log('Selectors', contacts);
  const filter = useSelector(state => state.filter);
  console.log('Selectors', filter);

  const visibleContacts = createSelector(
    [contacts, filter],
    (contacts, filter) => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  );

  console.log(visibleContacts);
};

export default Selectors;
