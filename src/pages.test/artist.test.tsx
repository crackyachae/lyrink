/**
 * @jest-environment jsdom
 */

import '@testing-library/react/dont-cleanup-after-each';

import { cleanup, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import jestFetchMock from 'jest-fetch-mock';

import { AlbumTypeMap } from '@/components/constants';
import config from '@/configs/config';
import ArtistPage, { getStaticProps } from '@/pages/artist';
import { getSortedAlbumYears } from '@/utils/filterUtils';

import {
  EpOne,
  SingleOne,
  sortWithReleasedDate,
  StudioOne,
  StudioTwo,
} from '../../tests/fixtures/album.fixture';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

const albums = sortWithReleasedDate([EpOne, SingleOne, StudioOne, StudioTwo]);

describe('GIVEN getStaticProps', () => {
  describe('WHEN album data is successfully fetched', () => {
    beforeEach(() => {
      jestFetchMock.resetMocks();
    });

    it('should pass props containing fetched albums', async () => {
      jestFetchMock.mockResponseOnce(JSON.stringify(albums));

      const response = await getStaticProps();
      expect(jestFetchMock).toHaveBeenCalledWith(
        `${config.baseUrl}/api/albums`
      );
      expect(response).toMatchObject({
        props: {
          albums,
        },
      });
    });
  });
});

describe('GIVEN ArtistPage component', () => {
  afterAll(() => {
    cleanup();
  });

  render(<ArtistPage albums={albums} />);

  const target = StudioOne;
  const targetYear = target.releasedDate.slice(0, 4);
  const yearFilterBtn = screen.getByRole('button', {
    name: targetYear,
  });

  describe('WHEN click year filter button', () => {
    it('should filter out albums with other year', async () => {
      await userEvent.click(yearFilterBtn);
      expect(yearFilterBtn).toHaveClass('btn-primary');

      const leftAlbumYears = screen.getAllByText(/\d{4}\.\d{2}\.\d{2}/i);
      leftAlbumYears.forEach((year) => {
        expect(year).toHaveTextContent(targetYear);
      });
    });
  });

  describe('WHEN click selected year filter button again', () => {
    it('should show all albums in list', async () => {
      await userEvent.click(yearFilterBtn);
      expect(yearFilterBtn).toHaveClass('btn-outline');

      const listedAlbumYears = screen.getAllByText(/\d{4}\.\d{2}\.\d{2}/i);
      const albumYears = getSortedAlbumYears(albums);

      listedAlbumYears.forEach((year, i) => {
        expect(year).toHaveTextContent(albumYears[i] as string);
      });
    });
  });

  const targetType = AlbumTypeMap[target.albumType];
  const typeFilterBtn = screen.getByRole('button', {
    name: targetType,
  });

  describe('WHEN click type filter button', () => {
    it('should filter out albums with other type', async () => {
      await userEvent.click(typeFilterBtn);
      expect(typeFilterBtn).toHaveClass('btn-primary');

      const albumList = screen.getByRole('main');
      const albumTypeRegex = new RegExp(Object.values(AlbumTypeMap).join('|'));
      const leftAlbumTypes = within(albumList).getAllByText(albumTypeRegex);
      leftAlbumTypes.forEach((type) => {
        expect(type).toHaveTextContent(targetType);
      });
    });
  });
});
