import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://657c2b27394ca9e4af159fc0.mockapi.io4';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const response = await axios.get(`/contacts/contacts/`);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return { error: error.message };
  }
});

export const addContactNew = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const response = await axios.post(`/contacts/contacts/`, { ...contact });
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);

export const contactDelete = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const response = await axios.delete(`/contacts/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return { error: error.message };
    }
  }
);
