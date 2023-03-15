/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import jestFetchMock from 'jest-fetch-mock';

import { AlbumTypeMap } from '@/components/constants';
import ArtistPage, { getStaticProps } from '@/pages/artist';

import {
  EpOne,
  SingleOne,
  StudioOne,
  StudioTwo,
} from '../../tests/fixtures/album.fixture';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

const albums = [EpOne, SingleOne, StudioOne, StudioTwo];

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

  describe('WHEN valid album data has passed', () => {
    it('THEN it should have all album in list', () => {
      // TODO: should change query
      render(<ArtistPage albums={albums} />);

      const albumList = screen.getAllByText(/앨범명/);
      expect(albumList).toHaveLength(albums.length);
    });

    it('THEN it should have album information', () => {
      const album = StudioTwo;
      render(<ArtistPage albums={[album]} />);

      const albumTitleRegex = new RegExp(album.title, 'i');
      const albumTitle = screen.getByRole('heading', { name: albumTitleRegex });
      expect(albumTitle).toBeInTheDocument();

      const albumType = screen.getByText(AlbumTypeMap[album.albumType]);
      expect(albumType).toBeInTheDocument();

      const albumArtist = screen.getByText(album.artists);
      expect(albumArtist).toBeInTheDocument();

      const albumReleaseDate = screen.getByText(album.releaseDate);
      expect(albumReleaseDate).toBeInTheDocument();

      const albumCover = screen.getByAltText(albumTitleRegex);
      expect(albumCover).toBeInTheDocument();

      const albumSongList = screen.getByRole('table');
      expect(albumSongList).toBeInTheDocument();
    });

    it('THEN only albums with two or more disks have a disk row', () => {
      const albumWithOneDisk = StudioOne;
      const albumWithTwoDisk = StudioTwo;

      render(<ArtistPage albums={[albumWithOneDisk]} />);
      const albumOneDiscTitle = screen.queryByText(/디스크/i);
      expect(albumOneDiscTitle).not.toBeInTheDocument();

      render(<ArtistPage albums={[albumWithTwoDisk]} />);
      const albumTwoDiscTitle = screen.getAllByText(/디스크/i);
      expect(albumTwoDiscTitle).toHaveLength(albumWithTwoDisk.songs.length);
    });
  });
});
