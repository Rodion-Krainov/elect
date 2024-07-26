import axios from 'axios';

const API_URL = 'http://localhost:5000/api/Sport/GetSportsForWeek';

export const getSportsForWeek = async (date: string) => {
  const response = await axios.get(`${API_URL}?date=${date}`, {
    headers: {
      Accept: 'application/json',
    },
  });
  return response.data;
};
