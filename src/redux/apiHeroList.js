import axios from 'axios';

const apiUrl = 'https://api.epicsevendb.com';

export const apiStatus = async () => {
  const response = await axios.get(`${apiUrl}/status`);
  if (response.data === 'OK') {
    return true;
  }
  return false;
};

const heroes = async (status = apiStatus()) => {
  if (status) {
    const response = await axios.get(`${apiUrl}/hero`);
    const heroList = response.data.results;
    return heroList;
  }

  return false;
};

export default heroes;
