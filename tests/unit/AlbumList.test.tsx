/**
 * @jest-environment jsdom
 */

import '@testing-library/react/dont-cleanup-after-each';

import { cleanup, render, screen, within } from '@testing-library/react';

import AlbumList from '@/components/AlbumList';
import { AlbumTypeMap } from '@/components/constants';

import {
  EpOne,
  SingleOne,
  StudioOne,
  StudioThree,
  StudioTwo,
} from '../fixtures/album.fixture';

const singleDiscAlbums = [EpOne, SingleOne, StudioOne, StudioThree];
const multiDiscAlbums = [StudioTwo];
const albums = [...singleDiscAlbums, ...multiDiscAlbums];

describe('GIVEN AlbumList component', () => {
  describe('WHEN valid album data has passed', () => {
    afterAll(() => {
      cleanup();
    });

    render(<AlbumList albums={albums} />);

    it('should have all album in list', () => {
      // TODO: should change query
      const albumList = screen.getAllByRole('heading');
      expect(albumList).toHaveLength(albums.length);
    });

    it('should have album information', () => {
      // select the first album because it's in a definite order (first) in any case
      const firstAlbum = EpOne;
      const ALBUM_INDEX = albums.indexOf(firstAlbum);

      const albumTitleRegex = new RegExp(firstAlbum.title, 'i');
      const albumTitle = screen.getByRole('heading', {
        name: albumTitleRegex,
      });
      expect(albumTitle).toBeInTheDocument();

      const albumType = screen.getAllByText(AlbumTypeMap[firstAlbum.albumType])[
        ALBUM_INDEX
      ];
      expect(albumType).toBeInTheDocument();

      const albumArtist = screen.getAllByText(firstAlbum.artists)[ALBUM_INDEX];
      expect(albumArtist).toBeInTheDocument();

      const albumReleasedDate = screen.getAllByText(firstAlbum.releasedDate)[
        ALBUM_INDEX
      ];
      expect(albumReleasedDate).toBeInTheDocument();

      const albumCover = screen.getAllByAltText(albumTitleRegex)[ALBUM_INDEX];
      expect(albumCover).toBeInTheDocument();

      const albumSongList = screen.getAllByRole('table')[ALBUM_INDEX];
      expect(albumSongList).toBeInTheDocument();
    });

    it('should have some links to each song page in song list', () => {
      const album = StudioThree;
      const ALBUM_INDEX = albums.indexOf(album);

      const albumSongList = screen.getAllByRole('table')[ALBUM_INDEX];
      const validSongLinks =
        album.songs[0]?.filter((song) => song.songId) || [];

      if (!albumSongList) {
        throw new Error('can not get Song List of given album');
      }

      const albumSongLinks = within(albumSongList).getAllByRole('link');
      expect(albumSongLinks).toHaveLength(validSongLinks.length);
      albumSongLinks.forEach((link, i) => {
        expect(link).toHaveAttribute(
          'href',
          `/song/${validSongLinks[i]?.songId}`
        );
      });
    });

    it('only albums with two or more disks have a disk row', () => {
      const multiDiscAlbumDiscTitle = screen.getAllByText(/디스크/i);
      const multiDiscAlbumDiscCount = multiDiscAlbums.reduce(
        (acc, album) => acc + album.songs.length,
        0
      );
      expect(multiDiscAlbumDiscTitle).toHaveLength(multiDiscAlbumDiscCount);
    });
  });
});
