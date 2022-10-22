import axios from 'axios'

export const simpleGet = async (url) => {
  const response = await axios.get(url);
  return response;
}