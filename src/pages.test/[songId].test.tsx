/**
 * @jest-environment jsdom
 */

import type { UseQueryResult } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import jestFetchMock from 'jest-fetch-mock';
import type { GetServerSidePropsContext } from 'next';
import type { NextRouter } from 'next/router';
import { useRouter } from 'next/router';
import type { ParsedUrlQuery } from 'querystring';

import type { TSong } from '@/@types/song';
import config from '@/configs/config';
import { useSongQuery } from '@/hooks/useSong';
import SongPage, { getServerSideProps } from '@/pages/song/[songId]';

import { Studio1Track2 } from '../../tests/fixtures/song.fixture';

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

describe('GIVEN Song page', () => {
  describe('WHEN getServerSideProps works', () => {
    beforeEach(() => {
      jestFetchMock.resetMocks();
    });

    it('should pass props containing dehydratedState with song data cached', async () => {
      jestFetchMock.mockResponseOnce(JSON.stringify(song));
      const context = {
        params: { songId: `${song._id}` } as ParsedUrlQuery,
      };

      const response = await getServerSideProps(
        context as GetServerSidePropsContext
      );

      expect(jestFetchMock).toHaveBeenCalledWith(
        `${config.baseUrl}/api/songs/${song._id}`
      );
      // TODO: Need to improve to check dehydrateState in props
      expect(response.props).toHaveProperty('dehydratedState');
    });
  });

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
