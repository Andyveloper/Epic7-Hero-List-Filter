import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://api.epicsevendb.com';

export const apiStatus = async () => {
  const response = await axios.get(`${apiUrl}/status`);
  if (response.data === 'OK') {
    return true;
  }
  return false;
};

const pushHeroes = (data) => {
  const heroes = data.map((element) => ({
    id: element.id,
    name: element.name,
    attribute: element.attribute,
    role: element.role,
    rarity: element.rarity,
    icon: element.assets.icon,
    zodiac: element.zodiac,
  }));
  return heroes;
};

const getHeroes = createAsyncThunk(
  'heroes/heroes',
  async (status = apiStatus()) => {
    if (status) {
      const response = await axios.get(`${apiUrl}/hero`);
      return pushHeroes(response.data.results);
    }

    return false;
  },
);

export default getHeroes;
