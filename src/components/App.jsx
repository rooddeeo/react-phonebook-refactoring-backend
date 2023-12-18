import ContactList from './ContactList/ContactList.jsx';
import { Provider } from 'react-redux';
import { store } from 'store/store.js';
import ContactForm from './ContactForm/ContactForm.jsx';
import Filter from './Filter/Filter.jsx';
import css from './App.module.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={css.subTitle}>Search for contact</h2>
          <Filter />
          <ContactList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
