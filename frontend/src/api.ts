import axios from 'axios';

const API_BASE_URL = 'https://localhost:5000/api/pictures'; // Adjust port if needed

export const getPictures = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};

export const addPicture = async (picture: any) => {
  const res = await axios.put(API_BASE_URL, picture);
  return res.data;
};
