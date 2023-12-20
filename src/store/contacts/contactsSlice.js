import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addContactNew, contactDelete, fetchContacts } from './operations';

const handlePending = (state, { payload }) => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    addContactAction: {
      prepare: contacts => {
        return { payload: { ...contacts, id: nanoid() } };
      },
      reducer: (state, action) => {
        return { ...state, contacts: [...state.contacts, action.payload] };
      },
    },
    deleteContactAction: (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload.id
        ),
      };
    },
    filterContactAction: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const {} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
