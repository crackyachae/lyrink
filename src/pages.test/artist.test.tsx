/**
 * @jest-environment jsdom
 */

import jestFetchMock from 'jest-fetch-mock';

import { getStaticProps } from '@/pages/artist';

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
});
