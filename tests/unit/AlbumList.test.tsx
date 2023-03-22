/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import AlbumList from '@/components/AlbumList';
import { AlbumTypeMap } from '@/components/constants';

import {
  EpOne,
  SingleOne,
  StudioOne,
  StudioTwo,
} from '../fixtures/album.fixture';

const albums = [EpOne, SingleOne, StudioOne, StudioTwo];

describe('GIVEN AlbumList component', () => {
  describe('WHEN valid album data has passed', () => {
    it('THEN it should have all album in list', () => {
      // TODO: should change query
      render(<AlbumList albums={albums} />);

      const albumList = screen.getAllByRole('heading');
      expect(albumList).toHaveLength(albums.length);
    });

    it('THEN it should have album information', () => {
      const album = StudioTwo;
      render(<AlbumList albums={[album]} />);

      const albumTitleRegex = new RegExp(album.title, 'i');
      const albumTitle = screen.getByRole('heading', { name: albumTitleRegex });
      expect(albumTitle).toBeInTheDocument();

      const albumType = screen.getByText(AlbumTypeMap[album.albumType]);
      expect(albumType).toBeInTheDocument();

      const albumArtist = screen.getByText(album.artists);
      expect(albumArtist).toBeInTheDocument();

      const albumReleasedDate = screen.getByText(album.releasedDate);
      expect(albumReleasedDate).toBeInTheDocument();

      const albumCover = screen.getByAltText(albumTitleRegex);
      expect(albumCover).toBeInTheDocument();

      const albumSongList = screen.getByRole('table');
      expect(albumSongList).toBeInTheDocument();
    });

    it('THEN only albums with two or more disks have a disk row', () => {
      const albumWithOneDisk = StudioOne;
      const albumWithTwoDisk = StudioTwo;

      render(<AlbumList albums={[albumWithOneDisk]} />);
      const albumOneDiscTitle = screen.queryByText(/디스크/i);
      expect(albumOneDiscTitle).not.toBeInTheDocument();

      render(<AlbumList albums={[albumWithTwoDisk]} />);
      const albumTwoDiscTitle = screen.getAllByText(/디스크/i);
      expect(albumTwoDiscTitle).toHaveLength(albumWithTwoDisk.songs.length);
    });
  });
});
