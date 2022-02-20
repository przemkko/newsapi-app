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
