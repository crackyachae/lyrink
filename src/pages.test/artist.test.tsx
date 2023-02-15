import { render, screen } from '@testing-library/react';

import ArtistPage from '@/pages/artist';

import { EpOne, SingleOne, StudioOne, StudioTwo } from './album.fixture';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('GIVEN Artist page', () => {
  describe('WHEN: valid album data has passed', () => {
    it('should have all album in list', () => {
      // TODO: should change query
      const albums = [EpOne, SingleOne, StudioOne, StudioTwo];
      render(<ArtistPage albums={albums} />);

      const albumList = screen.getAllByText(/앨범명/);
      expect(albumList).toHaveLength(albums.length);
    });
  });
});
