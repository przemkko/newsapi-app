import { NewsCategory } from './types';

const COUNTRY_DISPLAY_NAME: Record<string, string> = {
  gb: 'Great Britain',
  us: 'United States',
};

export const getCountryDisplayName = (country = '') => {
  return COUNTRY_DISPLAY_NAME[country] ?? 'N/A';
};

export const TOP_NAVIGATION_ITEMS: { name: string; href: string }[] = [
  { name: 'Top News', href: '/[country]/top' },
  { name: 'Categories', href: '/[country]/categories' },
  { name: 'Search', href: '/[country]/search' },
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
