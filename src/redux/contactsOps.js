import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://671bf7b22c842d92c381e30a.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (ErrorMessage) {
      return thunkAPI.rejectWithValue(ErrorMessage.message);
    }
  }
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contactData);
      return response.data;
    } catch (ErrorMessage) {
      return thunkAPI.rejectWithValue(ErrorMessage.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (ErrorMessage) {
      return thunkAPI.rejectWithValue(ErrorMessage.message);
    }
  }
);
