/**
 * @jest-environment jsdom
 */

import { renderHook, waitFor } from '@testing-library/react';
import type axios from 'axios';

import { useSongQuery } from '@/hooks/useSong';

import publicRequest from '../../src/utils/api';
import { Studio1Track2 } from '../fixtures/song.fixture';
import { createQueryWrapper } from '../utils/queryTestUtils';

const song = Studio1Track2;

jest.mock('../../src/utils/api');

describe('GIVEN useSong', () => {
  describe('WHEN useSongQuery hook renders', () => {
    it('should fetch song data', async () => {
      const publicRequestMock = publicRequest as jest.MockedFunction<
        typeof axios
      >;

      publicRequestMock.mockImplementationOnce(() =>
        Promise.resolve({ data: song })
      );

      const { result } = renderHook(() => useSongQuery(`${song._id}`), {
        wrapper: createQueryWrapper(),
      });

      await waitFor(() => expect(result.current.isLoading).toBe(false));
      expect(result.current.data).toMatchObject(song);
    });
  });
});
