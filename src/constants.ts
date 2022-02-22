import { NewsCategory } from './types';

const COUNTRY_DISPLAY_NAME: Record<string, string> = {
  gb: 'Great Britain',
  us: 'United States',
};

export const getCountryDisplayName = (country = '') => {
  return COUNTRY_DISPLAY_NAME[country] ?? '...';
};

export const TOP_NAVIGATION_ITEMS: { name: string; href: string }[] = [
  { name: 'Top News', href: '/news/[country]/top' },
  { name: 'Categories', href: '/news/[country]/categories' },
  { name: 'Search', href: '/news/[country]/search' },
];

export const TOP_CATEGORIES: NewsCategory[] = [
  { name: 'Entertainment', key: 'entertainment' },
  { name: 'General', key: 'general' },
  { name: 'Health', key: 'health' },
  { name: 'Science', key: 'science' },
  { name: 'Sports', key: 'sports' },
  { name: 'Technology', key: 'technology' },
];

export const TOP_CATEGORIES_ITEM_COUNT = 5;
