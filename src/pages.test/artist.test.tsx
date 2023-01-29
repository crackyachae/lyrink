import { render } from '@testing-library/react';

import ArtistPage from '@/pages/artist';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('GIVEN Artist page', () => {
  describe('WHEN: valid album data has passed', () => {
    render(<ArtistPage />);

    it('should have album list', () => {
      // TODO
    });
  });
});
