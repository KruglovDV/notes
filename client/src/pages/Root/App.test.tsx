import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { rest } from 'msw';

import { setupServer } from 'msw/node';

const mockData = { data: 'hello mock' };

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    console.log(req);
    return res(ctx.json(mockData));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders learn react link', async () => {
  render(<App />);
  await screen.findByTestId('app-text');

  expect(screen.getByTestId('app-text')).toHaveTextContent(mockData.data);
});
