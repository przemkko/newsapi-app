import { render, screen } from '@testing-library/react';
import TopPage from './top.page';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';

jest.mock('next/router');

beforeEach(() => {
  jest.resetAllMocks();
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('Home page', () => {
  it('renders', () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: {
        country: 'us',
      },
    });

    render(
      <QueryClientProvider client={queryClient}>
        <TopPage />
      </QueryClientProvider>
    );
    const heading = screen.getByRole('link', {
      name: /Top News/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
