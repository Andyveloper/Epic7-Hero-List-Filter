import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiStatus } from './apiHeroList';

const apiUrl = 'https://api.epicsevendb.com';

export const pushElements = (data) => {
  const elements = [];
  for (let i = 0; i < data.length; i += 1) {
    if (!elements.includes(data[i].attribute)) { elements.push(data[i].attribute); }
  }
  return elements;
};

const getElements = createAsyncThunk(
  'elements/elements',
  async (status = apiStatus()) => {
    if (status) {
      const response = await axios.get(`${apiUrl}/hero`);
      return pushElements(response.data.results);
    }
    return false;
  },
);
export default getElements;
