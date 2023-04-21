import axios from 'axios';

const searchParams = new URLSearchParams({
  key: '34293251-581ef66c68ad7ebfa4511ff3d',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
  const data = response.data;
  return data;
};