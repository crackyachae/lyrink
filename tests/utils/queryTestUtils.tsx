import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const createQueryWrapper = () => {
  const testQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  const Wrapper = ({ children }: { children: any }) => (
    <QueryClientProvider client={testQueryClient}>
      {children}
    </QueryClientProvider>
  );

  return Wrapper;
};
