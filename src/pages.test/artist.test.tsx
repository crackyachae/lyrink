import { render, screen } from '@testing-library/react';

import { AlbumTypeMap } from '@/components/constants';
import ArtistPage from '@/pages/artist';

import { EpOne, SingleOne, StudioOne, StudioTwo } from './album.fixture';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('GIVEN Artist page', () => {
  describe('WHEN valid album data has passed', () => {
    it('THEN it should have all album in list', () => {
      // TODO: should change query
      const albums = [EpOne, SingleOne, StudioOne, StudioTwo];
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

      const albumCover = screen.getByAltText(album.id);
      expect(albumCover).toBeInTheDocument();

      const albumSongList = screen.getByRole('table');
      expect(albumSongList).toBeInTheDocument();
    });
  });
});
