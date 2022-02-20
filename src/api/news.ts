import { baseClient } from './index';
import { Article, TopHeadlinesBody } from './types';
import { sha1 } from 'object-hash';

export interface TopNewsOptions {
  category?: string;
  searchTerm?: string;
  pageSize?: number;
}

export const getTopNews = (
  country: string,
  options: TopNewsOptions = {}
): Promise<TopHeadlinesBody> =>
  baseClient
    .get('/top-headlines', {
      params: {
        country,
        category: options.category,
        q: options.searchTerm,
        pageSize: options.pageSize,
      },
    })
    .then((res) => ({
      ...res.data,
      // The api does not return any unique identifier for article, so there's
      // nothing unique that we can put in the URL to find the data
      articles: res.data.articles.map((article: Article) => ({
        ...article,
        id: sha1(article),
      })),
    }));
