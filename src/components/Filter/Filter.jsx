import React, { useEffect, useState } from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'store/contacts/operations';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    const value = event.target.value;
    dispatch(fetchContacts(value));
  };

  return (
    <div>
      <input
        className={css.inputFilter}
        type="text"
        name="name"
        value={value}
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Please enter a contact name"
      />
    </div>
  );
};

export default Filter;
