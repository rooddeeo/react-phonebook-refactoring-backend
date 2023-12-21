import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactNew } from '../../store/contacts/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { contacts } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    setName('');
    setNumber('');
  };

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const addContact = addNewContact => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === addNewContact.name.toLowerCase()
    );
    if (isExist) {
      alert(`${addNewContact.name} is already in contacts.`);
      return;
    }
    dispatch(addContactNew(addNewContact));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.contactBlock}>
        <label className={css.contactFormLable}>Name</label>
        <input
          className={css.contactInputForm}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={css.contactFormLable}>Number</label>
        <input
          className={css.contactInputForm}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.contactBtn} type="submit">
          Add Contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
