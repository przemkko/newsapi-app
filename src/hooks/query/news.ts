import { useQuery } from 'react-query';
import { getTopNews } from '../../api/news';

export const useTopHeadlines = (country: string | undefined) => {
  return useQuery(['top-headlines', country], () => getTopNews(country!), {
    enabled: !!country,
  });
};
