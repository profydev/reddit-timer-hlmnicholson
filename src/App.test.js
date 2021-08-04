import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

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

    expect(screen.getByText(/home/i)).toBeInTheDocument();
    screen.debug();
  });

  test('Search link initiates the search function', () => {
    setup();

    const link = screen.getByRole('link', { name: /search/i });
    userEvent.click(link);

    expect(screen.getByText(/placeholder/i)).toBeInTheDocument();
    screen.debug();
  });

  test('#how-it-works link correctly updates the url', () => {
    setup();

    const link = screen.getByRole('link', { name: /how it works/i });
    userEvent.click(link);

    expect(window.location.hash).toMatch(/#how-it-works/);
    screen.debug();
  });
});
