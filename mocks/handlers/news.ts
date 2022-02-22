import { rest } from 'msw';
import { createSampleArticle } from '../fixtures/news';

export const handlers = [
  rest.get('https://newsapi.org/v2/top-headlines', (req, res, ctx) => {
    const articles = new Array(10)
      .fill(0)
      .map((_, index) => createSampleArticle(index));
    return res(
      ctx.status(200),
      ctx.delay(500),
      ctx.json({
        status: 'ok',
        totalResults: articles.length,
        articles,
      })
    );
  }),
];
