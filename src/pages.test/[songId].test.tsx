/**
 * @jest-environment jsdom
 */

import jestFetchMock from 'jest-fetch-mock';
import type { GetServerSidePropsContext } from 'next';
import type { ParsedUrlQuery } from 'querystring';

import config from '@/configs/config';
import { getServerSideProps } from '@/pages/song/[songId]';

import { Studio1Track2 } from '../../tests/fixtures/song.fixture';

const song = Studio1Track2;

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
});
