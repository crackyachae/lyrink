/**
 * @jest-environment jsdom
 */

import { renderHook, waitFor } from '@testing-library/react';
import jestFetchMock from 'jest-fetch-mock';

import { useSongQuery } from '@/hooks/useSong';

import { Studio1Track2 } from '../fixtures/song.fixture';
import { createQueryWrapper } from '../utils/queryTestUtils';

const song = Studio1Track2;

describe('GIVEN useSong', () => {
  describe('WHEN useSongQuery hook renders', () => {
    it('should fetch song data', async () => {
      jestFetchMock.mockResponseOnce(JSON.stringify(song));

      const { result } = renderHook(() => useSongQuery(`${song._id}`), {
        wrapper: createQueryWrapper(),
      });

      await waitFor(() => expect(result.current.isLoading).toBe(false));
      expect(result.current.data).toMatchObject(song);
    });
  });
});
