// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`
import '@testing-library/jest-dom/extend-expect';
import jestFetchMock from 'jest-fetch-mock';

import { TextEncoder, TextDecoder } from 'util';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

jestFetchMock.enableMocks();
