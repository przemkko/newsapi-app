import { baseClient } from './index';
import { TopHeadlinesBody } from './types';

export const getTopNews = (country: string): Promise<TopHeadlinesBody> =>
  baseClient
    .get('/top-headlines', {
      params: { country },
    })
    .then((res) => res.data);
