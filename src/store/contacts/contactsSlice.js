import { createSlice } from '@reduxjs/toolkit';
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
    addContact: [],
    isLoading: false,
    error: null,
    filter: '',
  },

  reducers: {
    filterContactAction: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContactNew.pending, handlePending)
      .addCase(contactDelete.pending, handlePending)

      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContactNew.rejected, handleRejected)
      .addCase(contactDelete.rejected, handleRejected)

      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(addContactNew.fulfilled, (state, { payload }) => {
        state.contacts = [...state.contacts, payload];
        state.isLoading = false;
      })
      .addCase(contactDelete.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.isLoading = false;
      });
  },
});

export const { filterContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
