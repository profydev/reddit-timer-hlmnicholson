import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
// import mockResponse from './__mocks__/subreddit-reactjs-response.json';

fetchMock.enableMocks();

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  test('Logo link points to the home page', () => {
    setup();

    const link = screen.getByRole('link', { name: /logo/i });
    userEvent.click(link);

    expect(screen.getByText(/Home/i)).toBeInTheDocument();

    screen.debug();
  });

  // test.each([
  //   [/about/i],
  //   // [/how it works/i],
  // ])('link points to the correct page', (label) => {
  //   setup();

  //   const link = screen.getByRole('link', { name: label });
  //   userEvent.click(link);

  //   expect(
  //     screen.getByRole('heading', { name: label }),
  //   ).toBeInTheDocument();

  //   screen.debug();
  // });
});
