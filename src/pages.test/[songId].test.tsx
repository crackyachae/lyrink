/**
 * @jest-environment jsdom
 */

import type { UseQueryResult } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import type axios from 'axios';
import type { GetServerSidePropsContext } from 'next';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import type { ParsedUrlQuery } from 'querystring';

import type { TSong } from '@/@types/song';
import { useSongQuery } from '@/hooks/useSong';
import SongPage, { getServerSideProps } from '@/pages/song/[songId]';

import { Studio1Track2 } from '../../tests/fixtures/song.fixture';
import publicRequest from '../utils/api';

const song = Studio1Track2;

type TUseQueryResultMock<TData, TError> = Partial<
  UseQueryResult<TData, TError>
>;
type TUseRouterMock = Partial<NextRouter>;

jest.mock('@/hooks/useSong', () => ({
  useSongQuery: jest.fn(),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../utils/api');

describe('GIVEN getServerSideProps', () => {
  const publicRequestMock = publicRequest as jest.MockedFunction<typeof axios>;

  describe('WHEN songId is invalid', () => {
    it('should return notFound with true', async () => {
      publicRequestMock.mockImplementationOnce(() => Promise.reject());
      const context = {
        params: { songId: 'invalid-song-id' } as ParsedUrlQuery,
      };

      const error = await getServerSideProps(
        context as GetServerSidePropsContext
      );

      expect(error).toHaveProperty('notFound');
      expect(error.notFound).toEqual(true);
    });
  });

  describe('WHEN songId is valid', () => {
    it('should pass props containing dehydratedState with song data cached', async () => {
      publicRequestMock.mockImplementationOnce(() =>
        Promise.resolve({ data: song })
      );
      const context = {
        params: { songId: `${song._id}` } as ParsedUrlQuery,
      };

      const response = await getServerSideProps(
        context as GetServerSidePropsContext
      );

      expect(publicRequestMock).toHaveBeenCalledWith({
        url: `/songs/${song._id}`,
        method: 'GET',
      });
      // TODO: Need to improve to check dehydrateState in props
      expect(response.props).toHaveProperty('dehydratedState');
    });
  });
});

describe('GIVEN SongPage Component', () => {
  const useSongQueryMock = useSongQuery as jest.MockedFunction<
    (songId: string) => TUseQueryResultMock<TSong, Error>
  >;
  const useRouterMock = useRouter as jest.MockedFunction<() => TUseRouterMock>;
  useRouterMock.mockImplementation(() => ({
    query: { songId: `${song._id}` } as ParsedUrlQuery,
  }));

  describe('WHEN song query is loading', () => {
    beforeEach(() => {
      useSongQueryMock.mockClear();
    });

    it('should render a loading element', () => {
      useSongQueryMock.mockImplementationOnce(() => ({
        data: undefined,
        isLoading: true,
      }));

      render(<SongPage />);

      const loadingElement = screen.getByText(/loading/i);
      expect(loadingElement).toBeInTheDocument();
    });
  });

  describe('WHEN song query returns error', () => {
    it('should render an error message', () => {
      const error = {
        name: 'QueryError',
        message: 'fail to get song data by useQuery',
      };

      useSongQueryMock.mockImplementationOnce(() => ({
        isError: true,
        error,
      }));

      render(<SongPage />);

      const errorMsgRegex = new RegExp(error.message, 'i');
      const errorElement = screen.getByText(errorMsgRegex);
      expect(errorElement).toBeInTheDocument();
    });
  });

  describe('WHEN song query returns correct data', () => {
    it('should have song information', () => {
      useSongQueryMock.mockImplementationOnce(() => ({
        data: song,
        isLoading: false,
        isError: false,
      }));

      render(<SongPage />);

      const songTitleRegex = new RegExp(song.songTitle, 'i');
      const songTitle = screen.getByRole('heading', { name: songTitleRegex });
      expect(songTitle).toBeInTheDocument();

      const albumTitle = screen.getByText(song.albumTitle);
      expect(albumTitle).toBeInTheDocument();

      const songArtist = screen.getByText(song.artists);
      expect(songArtist).toBeInTheDocument();

      const songLyricText = screen.getAllByText(
        song.lyrics[0]?.phrases[0]?.words[0]?.wordText as string
      );
      expect(songLyricText[0]).toBeInTheDocument();
    });
  });
});
