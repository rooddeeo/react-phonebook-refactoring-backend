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
        state.addContact = payload;
        state.isLoading = false;
      })
      .addCase(contactDelete.fulfilled, (state, { payload }) => {
        state.deleteContact = payload;
        state.isLoading = false;
      });
  },
});

export const { addContactAction, deleteContactAction, filterContactAction } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
