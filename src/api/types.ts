export interface Source {
  id: string;
  name: string;
}

export interface Article {
  id: string;
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}

export interface TopHeadlinesBody {
  status: string;
  totalResults: number;
  articles: Article[];
}
