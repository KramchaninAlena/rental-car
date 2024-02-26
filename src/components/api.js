import axios from 'axios';

axios.defaults.baseURL = 'https://65bb782d52189914b5bc3e4b.mockapi.io/api';

export const fetchCatalog = async () => {
  try {
    const result = await axios.get(`/cars`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
