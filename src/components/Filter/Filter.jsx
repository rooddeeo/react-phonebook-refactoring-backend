import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContactAction } from 'store/contacts/contactsSlice';

const Filter = () => {
  const { value } = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();

  const changeFilter = event => {
    const value = event.target.value;
    dispatch(filterContactAction(value));
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
