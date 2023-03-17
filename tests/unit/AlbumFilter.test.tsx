/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';

import AlbumFilter from '@/components/AlbumFilter';
import { getSortedAlbumTypes, getSortedAlbumYears } from '@/utils/filterUtils';

import {
  EpOne,
  SingleOne,
  StudioOne,
  StudioTwo,
} from '../fixtures/album.fixture';

const albums = [EpOne, SingleOne, StudioOne, StudioTwo];

describe('GIVEN AlbumFilter component', () => {
  describe('WHEN valid album data has passed', () => {
    render(<AlbumFilter albums={albums} />);

    it('should have album filter with type and year', () => {
      const albumTypes = getSortedAlbumTypes(albums);
      const albumYears = getSortedAlbumYears(albums);
      const albumFilters = [...albumTypes, ...albumYears];

      const yearFilterHeader = screen.getByRole('heading', { name: /연도/i });
      const typeFilterHeader = screen.getByRole('heading', { name: /유형/i });
      expect(yearFilterHeader).toBeInTheDocument();
      expect(typeFilterHeader).toBeInTheDocument();

      // TODO: 연도와 유형을 각각 받아와서 확인할 수 있도록 수정
      const filterButtons = screen.getAllByRole('button');
      filterButtons.forEach((buttonNode, i) => {
        expect(buttonNode).toHaveTextContent(albumFilters[i] as string);
      });
    });
  });
});
