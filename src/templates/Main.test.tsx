/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';

import { Main } from './Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have 3 menu items', () => {
      render(<Main meta={null}>{null}</Main>);

      // TODO
    });
  });
});
