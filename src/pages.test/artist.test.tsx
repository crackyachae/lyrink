/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import jestFetchMock from 'jest-fetch-mock';

import ArtistPage, { getStaticProps } from '@/pages/artist';
import { getSortedAlbumYears } from '@/utils/filterUtils';

import {
  EpOne,
  SingleOne,
  sortWithReleaseDate,
  StudioOne,
  StudioTwo,
} from '../../tests/fixtures/album.fixture';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

const albums = sortWithReleaseDate([EpOne, SingleOne, StudioOne, StudioTwo]);

describe('GIVEN Artist page', () => {
  describe('WHEN getStaticProps works', () => {
    beforeEach(() => {
      jestFetchMock.resetMocks();
    });

    it('should pass props containing fetched albums', async () => {
      jestFetchMock.mockResponseOnce(JSON.stringify(albums));

      const response = await getStaticProps();
      expect(response).toMatchObject({
        props: {
          albums,
        },
      });
    });
  });

  describe('WHEN interact with filter', () => {
    const target = StudioOne;
    const targetYear = target.releaseDate.slice(0, 4);

    it('should filter and unfilter albums correctly', async () => {
      render(<ArtistPage albums={albums} />);
      const yearFilterBtn = screen.getByRole('button', {
        name: targetYear,
      });

      await userEvent.click(yearFilterBtn);

      const leftAlbumYears = screen.getAllByText(/\d{4}\.\d{2}\.\d{2}/i);
      leftAlbumYears.forEach((year) => {
        expect(year).toHaveTextContent(targetYear);
      });

      await userEvent.click(yearFilterBtn);

      const listedAlbumYears = screen.getAllByText(/\d{4}\.\d{2}\.\d{2}/i);
      const albumYears = getSortedAlbumYears(albums);

      listedAlbumYears.forEach((year, i) => {
        expect(year).toHaveTextContent(albumYears[i] as string);
      });
    });
  });
});
