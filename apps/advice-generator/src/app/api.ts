import axios from 'axios';
import { useQuery } from 'react-query';

export const useFetchAdvice = () => {
  return useQuery(
    'advice',
    async () => {
      const { data } = await axios.get('https://api.adviceslip.com/advice');
      return data;
    },
    { refetchOnWindowFocus: false }
  );
};
